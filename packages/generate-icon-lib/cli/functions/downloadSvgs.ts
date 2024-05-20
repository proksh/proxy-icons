import path from 'path';
import { Icons, IconsSvgUrls } from '../types.js';
import fs from 'fs-extra';
import { labelling, transformers } from './common.js';

export async function downloadSvgsToFs(
  urls: IconsSvgUrls,
  icons: Icons,
  currentTempDir: string,
  currentListOfAddedFiles: string[],
  onProgress: () => void
) {
  await Promise.all(
    Object.keys(urls).map(async (iconId) => {
      const processedSvg = await (
        await fetch(urls[iconId])
      )
        .text()
        .then(async (svgRaw) => transformers.passSVGO(svgRaw))
        .then((svgRaw) => transformers.injectCurrentColor(svgRaw))
        .then((svgRaw) => transformers.prettify(svgRaw));

      const filePath = path.resolve(currentTempDir, labelling.filePathFromIcon(icons[iconId]));
      await fs.outputFile(filePath, processedSvg, { encoding: 'utf8' });
      currentListOfAddedFiles.push(filePath);
      onProgress();
    })
  );
}
