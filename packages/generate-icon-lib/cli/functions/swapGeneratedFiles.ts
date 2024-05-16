import path from "path";
import {
  FILE_PATH_ENTRY,
  FILE_PATH_MANIFEST,
  FILE_PATH_TYPES,
} from "../const.js";
import { IconMenifest } from "../types.js";
import { pushObjLeafNodesToArr } from "../utils.js";
import fs from "fs-extra";
import _ from "lodash";

export async function swapGeneratedFiles(
  previousIconManifest: IconMenifest,
  nextIconManifest: IconMenifest,
  currentTempDir: string
): Promise<string[]> {
  /* We must find all dirs and files that were generated, and remove them: */
  let generatedFilePaths: string[] = [];
  //  1. The top-level dirs for previous SVGs
  pushObjLeafNodesToArr(previousIconManifest, generatedFilePaths);
  //  2. The top-level dirs needed for new SVGs
  pushObjLeafNodesToArr(nextIconManifest, generatedFilePaths);
  //  3. The top-level dirs for generated source
  generatedFilePaths = generatedFilePaths.concat([
    FILE_PATH_ENTRY,
    FILE_PATH_TYPES,
  ]);
  const topLevelDirs: string[] = _.uniq(
    generatedFilePaths.map((filePath) => filePath.replace(/^([\w-]+).*/, "$1"))
  );
  for (const i in topLevelDirs) {
    const topLevelDir = topLevelDirs[i];
    await fs.remove(path.resolve(process.cwd(), topLevelDir));
  }
  //  4. The manifest file
  await fs.remove(path.resolve(process.cwd(), FILE_PATH_MANIFEST));

  /* Then we take all the contents of our temp dir and copy them to cwd: */
  await fs.copy(currentTempDir, process.cwd());

  return topLevelDirs.concat([FILE_PATH_MANIFEST]);
}
