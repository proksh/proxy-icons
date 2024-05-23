import { CodedError, ERRORS } from './types.js';
import { handleError } from './utils.js';
import { prechecks } from './functions/precheck.js';
import dotenv from 'dotenv';
import { getFigmaDocument, getIcons, getIconsPage, renderIdsToSvgs } from './functions/figmaApis.js';
import { downloadSvgsToFs } from './functions/downloadSvgs.js';
import { temporaryDirectory } from 'tempy';
import { generateReactComponents } from './functions/generateReactComponents.js';
import { generateIconManifest } from './functions/generateIconManifest.js';
import { swapGeneratedFiles } from './functions/swapGeneratedFiles.js';
import { generateIconsJSON } from './functions/generateIconsJSON.js';
import { generateFontFiles } from './functions/generateFontFiles.js';

async function main() {
  dotenv.config();

  /* 0. Prechecks before starting */
  await prechecks();
  let currentTempDir = temporaryDirectory();
  let currentListOfAddedFiles: string[] = [];

  /* 1. Request the figma document, to source all visual nodes */
  console.log('✨ Finding the file in Figma...');
  const document = await getFigmaDocument();
  console.log('✅ File Found');

  /* 2. Get Icons Page */
  console.log('✨ Finding icons page...');
  const iconsCanvas = getIconsPage(document);
  if (!iconsCanvas) {
    handleError(new CodedError(ERRORS.FIGMA_API, 'No icon canvas found'));
    process.exit(1);
  }
  console.log('✅ Page Found');

  /* 3. Get individual icons from the page */
  console.log('✨ Getting Icons...');
  const icons = getIcons(iconsCanvas);
  const iconIds = Object.keys(icons);
  if (!iconIds.length) {
    throw new CodedError(
      ERRORS.NO_ICONS_IN_SETS,
      'Expected one or more icon-sets to be in the "Icons" page. Please try again when you have created Frames to group icon-sets; refer to documentation for more details.'
    );
  }
  console.log('✅ Got all icons');

  /* 4. Request Figma services to render Icon nodes as individual SVGs */
  console.log('✨ Getting Icon Urls...');
  const iconSvgUrls = await renderIdsToSvgs(iconIds);
  console.log('✅ Got Icon Urls');

  /* 5. Download all SVG in temp directory */
  console.log('✨ Getting SVGs...');
  let downloadsCompleted = 0;
  await downloadSvgsToFs(iconSvgUrls, icons, currentTempDir, currentListOfAddedFiles, () => {
    downloadsCompleted += 1;
    console.log(`${(100 * downloadsCompleted) / iconIds.length} %`);
  });
  console.log('✅ Got Svgs');

  /* 6. Generate React Component */
  console.log('✨ Getting React components...');
  await generateReactComponents(icons, currentTempDir, currentListOfAddedFiles);
  console.log('✅ React components generated');

  /* 7. Generate Menifest */
  console.log('✨ Generating Manifest...');
  const [previousIconManifest, nextIconManifest] = await generateIconManifest(
    icons,
    currentTempDir,
    currentListOfAddedFiles
  );
  console.log('✅ Manifest Generated');

  /* 8. Generate Icons Json */
  console.log('✨ Generating Icons JSON');
  await generateIconsJSON(icons, currentTempDir, currentListOfAddedFiles);
  console.log('✅ Generated Icons JSON');

  /* 9. Swapping generated files */
  console.log('✨ Swapping generated files...');
  const touchedPaths = await swapGeneratedFiles(previousIconManifest, nextIconManifest, currentTempDir);
  console.log('✅ Files Swapped', touchedPaths);

  /* 9. Generated font files */
  console.log('✨ Generated Font Files...');
  await generateFontFiles();
  console.log('✅ Font Files');
}

main()
  .then(() => {
    console.log('Bai 👋');
  })
  .catch((err) => handleError(err));

process.addListener('unhandledRejection', (err) => handleError(err as CodedError));
