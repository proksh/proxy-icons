import path from 'path';
import { Icons, IconsJSONType } from '../types.js';
import { FILE_PATH_ICONSJSON } from '../const.js';
import prettier from 'prettier';
import fs from 'fs-extra';

export async function generateIconsJSON(icons: Icons, currentTempDir: string, currentListOfAddedFiles: string[]) {
  const iconManifestFilePath = path.resolve(currentTempDir, FILE_PATH_ICONSJSON);
  const iconsJson = iconsToJson(icons);
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

export function iconsToJson(icons: Icons): IconsJSONType {
  return Object.keys(icons).reduce((iconsJSON: IconsJSONType, iconId) => {
    const icon = icons[iconId];

    if (!iconsJSON[icon.category]) {
      iconsJSON[icon.category] = {};
    }
    if (!iconsJSON[icon.category][icon.svgName]) {
      iconsJSON[icon.category][icon.svgName] = {
        tags: icon.tags,
        labels: icon.labels,
      };
    }

    return iconsJSON;
  }, {});
}
