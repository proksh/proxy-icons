import path from 'path';
import { Icons, IconsSvgUrls } from '../types.js';
import fs from 'fs-extra';
import { labelling, transformers } from './common.js';
import pRetry from 'p-retry';
import fetch from 'node-fetch';
import { EventEmitter } from 'events';

EventEmitter.defaultMaxListeners = 20;

export async function downloadSvgsToFs(
  urls: IconsSvgUrls,
  icons: Icons,
  currentTempDir: string,
  currentListOfAddedFiles: string[],
  onProgress: () => void
) {
  const fetchWithTimeout = async (url: string, timeout: number = 10000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(id); // Clear the timeout when the fetch completes
      if (!response.ok) throw new Error(`Failed to fetch SVG`);
      return response.text();
    } catch (error) {
      clearTimeout(id); // Ensure the timeout is cleared even if an error occurs
      throw error; // Re-throw the error to let pRetry handle it
    }
  };

  await Promise.all(
    Object.keys(urls).map(async (iconId) => {
      const svgUrl = urls[iconId];
      const processedSvg = await pRetry(
        () =>
          fetchWithTimeout(svgUrl)
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
