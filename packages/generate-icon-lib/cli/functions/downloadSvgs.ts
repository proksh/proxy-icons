import path from 'path';
import { Icons, IconsSvgUrls } from '../types.js';
import fs from 'fs-extra';
import { labelling, transformers } from './common.js';
import pRetry from 'p-retry';
import fetch from 'node-fetch';

export async function downloadSvgsToFs(
  urls: IconsSvgUrls,
  icons: Icons,
  currentTempDir: string,
  currentListOfAddedFiles: string[],
  onProgress: () => void
) {
  await Promise.all(
    Object.keys(urls).map(async (iconId) => {
      const fetchSvg = async () => {
        const response = await fetch(urls[iconId]);
        if (!response.ok) throw new Error(`Failed to fetch SVG for ${iconId}`);
        return response.text();
      };

      const processedSvg = await pRetry(
        () =>
          fetchSvg()
            .then(async (svgRaw) => transformers.passSVGO(svgRaw))
            .then((svgRaw) => transformers.injectCurrentColor(svgRaw))
            .then((svgRaw) => transformers.prettify(svgRaw)),
        {
          retries: 3,
          onFailedAttempt: (error) => {
            console.error(`Attempt ${error.attemptNumber} failed. There are ${error.retriesLeft} retries left.`);
          },
        }
      );

      const filePath = path.resolve(currentTempDir, labelling.filePathFromIcon(icons[iconId]));
      await fs.outputFile(filePath, processedSvg, { encoding: 'utf8' });
      currentListOfAddedFiles.push(filePath);
      onProgress();
    })
  );
}
