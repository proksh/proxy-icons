import { CodedError } from './types.js';
import _ from 'lodash';
import chalk from 'chalk';

export function handleError(err: CodedError, exit = true) {
  if (err instanceof CodedError) {
    console.error(
      `${chalk.red.bold('ERROR: ')}${chalk.bgRed.black.bold.inverse(` ${err.code} `)}
${err.message}
${chalk.dim(!(err.hideStack && err.stack) ? err.stack?.replace(/^.*\n/, '') : '')}`.trim()
    );
  } else {
    console.log(`${chalk.red.bold('ERROR: ')}${chalk.bgRed.black.bold.inverse(' UNHANDLED ')}\n`);
    console.error(err);
  }

  if (exit) {
    process.exit(1);
  }
}

export function pushObjLeafNodesToArr(obj: {}, arr: string[], accessor: any[] = []) {
  _.forEach(accessor.length ? _.get(obj, accessor) : obj, (v: any, k: any) => {
    if (v == null) return;
    const currentAccessor = accessor.concat(k);
    if (typeof v === 'object') {
      pushObjLeafNodesToArr(obj, arr, currentAccessor);
    }
    if (typeof v === 'string') {
      arr.push(_.get(obj, currentAccessor));
    }
  });
}
