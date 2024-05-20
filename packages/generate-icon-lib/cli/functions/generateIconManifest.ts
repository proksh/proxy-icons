import path from 'path';
import { CodedError, ERRORS, IconMenifest, Icons } from '../types.js';
import { FILE_PATH_MANIFEST } from '../const.js';
import prettier from 'prettier';
import fs from 'fs-extra';
import { labelling } from './common.js';
import { execa } from 'execa';
import { handleError } from '../utils.js';

export async function generateIconManifest(icons: Icons, currentTempDir: string, currentListOfAddedFiles: string[]) {
  const iconManifestFilePath = path.resolve(currentTempDir, FILE_PATH_MANIFEST);
  const iconManifest = iconsToManifest(icons);
  let iconManifestRaw = JSON.stringify(iconManifest);
  const prettierOptions = prettier.resolveConfig(process.cwd());
  iconManifestRaw = await prettier.format(iconManifestRaw, {
    ...prettierOptions,
    parser: 'json',
  });
  const previousIconManifest = await getCurrentIconManifest();
  await fs.writeFile(iconManifestFilePath, iconManifestRaw, {
    encoding: 'utf8',
  });
  currentListOfAddedFiles.push(iconManifestFilePath);
  return [previousIconManifest, iconManifest];
}

export function iconsToManifest(icons: Icons): IconMenifest {
  return Object.keys(icons).reduce((iconManifest: IconMenifest, iconId) => {
    const icon = icons[iconId];

    if (!iconManifest[icon.category]) {
      iconManifest[icon.category] = {};
    }
    if (!iconManifest[icon.category][icon.svgName]) {
      iconManifest[icon.category][icon.svgName] = labelling.filePathFromIcon(icon);
    }

    return iconManifest;
  }, {});
}

export async function getCurrentIconManifest(): Promise<IconMenifest> {
  const { stdout: gitRootDir } = await execa('git', ['rev-parse', '--show-toplevel']);
  const gitRelativePathToManifest = path.relative(gitRootDir, path.resolve(process.cwd(), FILE_PATH_MANIFEST));
  try {
    let { stdout: currentManifest } = await execa('git', ['show', `HEAD:${gitRelativePathToManifest}`]);
    return JSON.parse(currentManifest);
  } catch (err) {
    console.log('No commited manifest.json');
    return {};
  }
}
