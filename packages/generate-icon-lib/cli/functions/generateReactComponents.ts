import path from 'path';
import { Icon, Icons } from '../types.js';
import fs from 'fs-extra';
import prettier from 'prettier';
import { labelling, transformers } from './common.js';
import ejs from 'ejs';
import { FILE_PATH_ENTRY, FILE_PATH_TYPES } from '../const.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function filePathToSVGinJSXSync(filePath: string, currentTempDir: string) {
  const absFilePath = path.resolve(currentTempDir, filePath);
  const svgRaw = fs.readFileSync(absFilePath, { encoding: 'utf8' });
  return transformers.readyForJSX(svgRaw);
}

export async function generateReactComponents(icons: Icons, currentTempDir: string, currentListOfAddedFiles: string[]) {
  const getTemplateSource = (templateFile: string) =>
    fs.readFile(path.resolve(__dirname, '../templates/', templateFile), {
      encoding: 'utf8',
    });
  const templates = {
    entry: await getTemplateSource('entry.tsx.ejs'),
    icon: await getTemplateSource('named-icon.tsx.ejs'),
    types: await getTemplateSource('types.tsx'),
  };

  const templateHelpers = {
    iconToComponentName(icon: Icon) {
      return `${icon.jsxName}Icon`;
    },
    iconToPropsName(icon: Icon) {
      return `${icon.jsxName}IconProps`;
    },
    iconToReactFileName(icon: Icon) {
      return `${icon.jsxName}Icon.tsx`;
    },
    iconToSVGSourceAsJSX(icon: Icon) {
      const filePath = labelling.filePathFromIcon(icon);
      return filePathToSVGinJSXSync(filePath, currentTempDir);
    },
    stripExtension(fileName: string) {
      return fileName.replace(/(.*)\.\w+$/, '$1');
    },
  };

  const prettierOptions = prettier.resolveConfig(process.cwd());
  /* Generate Icon Component Modules */
  for (const key in icons) {
    const icon = icons[key];
    let iconSourceRaw = await ejs.render(templates.icon, {
      icon,
      ...templateHelpers,
    });
    const iconSource = await prettier.format(iconSourceRaw, {
      ...prettierOptions,
      parser: 'typescript',
    });
    const iconComponentFilePath = path.resolve(currentTempDir, 'src/', templateHelpers.iconToReactFileName(icon));
    await fs.outputFile(iconComponentFilePath, iconSource);
    currentListOfAddedFiles.push(iconComponentFilePath);
  }

  /* Generate Entry Module */
  let entrySourceRaw = await ejs.render(templates.entry, {
    icons,
    ...templateHelpers,
  });
  const entrySource = await prettier.format(entrySourceRaw, {
    ...prettierOptions,
    parser: 'typescript',
  });
  const entryFilePath = path.resolve(currentTempDir, FILE_PATH_ENTRY);
  await fs.outputFile(entryFilePath, entrySource);
  currentListOfAddedFiles.push(entryFilePath);

  /* Generate Type Modules */
  const typeDepsFilePath = path.resolve(currentTempDir, FILE_PATH_TYPES);
  await fs.outputFile(typeDepsFilePath, templates.types);
  currentListOfAddedFiles.push(typeDepsFilePath);
}
