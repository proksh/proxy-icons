import path from 'path';
import { Icons, IconsJSONType } from '../types.js';
import { FILE_PATH_ICONSJSON } from '../const.js';
import prettier from 'prettier';
import fs from 'fs-extra';

export async function generateIconsJSON(icons: Icons, currentTempDir: string, currentListOfAddedFiles: string[]) {
  const iconManifestFilePath = path.resolve(currentTempDir, FILE_PATH_ICONSJSON);
  const iconsJson = await iconsToJson(icons, currentTempDir);
  let iconsJsonRaw = JSON.stringify(iconsJson);
  const prettierOptions = prettier.resolveConfig(process.cwd());
  iconsJsonRaw = await prettier.format(iconsJsonRaw, {
    ...prettierOptions,
    parser: 'json',
  });
  await fs.writeFile(iconManifestFilePath, iconsJsonRaw, {
    encoding: 'utf8',
  });
  currentListOfAddedFiles.push(iconsJsonRaw);
}

async function iconsToJson(icons: Icons, currentTempDir: string): Promise<IconsJSONType> {
  const iconsJSON: IconsJSONType = {};

  for (const iconId of Object.keys(icons)) {
    const icon = icons[iconId];
    const svgFilePath = path.resolve(currentTempDir, 'icons', `${icon.svgName}.svg`);
    const svgContent = await fs.readFile(svgFilePath, { encoding: 'utf8' });

    if (!iconsJSON[icon.category]) {
      iconsJSON[icon.category] = {};
    }
    if (!iconsJSON[icon.category][icon.svgName]) {
      iconsJSON[icon.category][icon.svgName] = {
        tags: icon.tags,
        labels: icon.labels,
        svgContent: svgContent,
      };
    }
  }

  return iconsJSON;
}
