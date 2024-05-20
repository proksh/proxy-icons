import isOnline from 'is-online';
import _ from 'lodash';
import { FOLDER_PATH_ICONS } from '../const.js';
import { CodedError, ERRORS } from '../types.js';
import { handleError } from '../utils.js';
import chalk from 'chalk';
import { execa } from 'execa';

export async function prechecks() {
  /* We can't work offline. */
  isOnline().then((isOn) => {
    if (!isOn) {
      throw new CodedError(
        ERRORS.NETWORK_OFFLINE,
        'An internet connection is required to find and render Icons.',
        true
      );
    }
  });

  /* We don't want to end up deleted work-in-progress. */
  const [{ stdout: trackedFiles }, { stdout: untrackedFiles }] = await Promise.all([
    // Checks for uncommitted changes.
    execa('git', ['diff-index', 'HEAD', '--', FOLDER_PATH_ICONS]),
    // Checks for untracked files.
    execa('git', ['ls-files', '--others', '--exclude-standard', FOLDER_PATH_ICONS]),
  ]);
  if (trackedFiles.length > 0 || untrackedFiles.length > 0) {
    handleError(
      new CodedError(
        ERRORS.DIRTY_WORKING_DIR,
        'There are uncommitted or untracked files in the working directory.\nPlease commit, stash, or remove them. Then try again.',
        true
      ),
      false
    );
    console.error(`
${chalk.bold('Git Status')} ${chalk.dim(
      `(${['--no-renames', '--untracked-files', '--short', '--', FOLDER_PATH_ICONS].join(' ')})`
    )}
`);
    await execa('git', ['status', '--no-renames', '--untracked-files', '--short', '--', FOLDER_PATH_ICONS], {
      stdio: 'inherit',
    });
    process.exit(1);
  }
}
