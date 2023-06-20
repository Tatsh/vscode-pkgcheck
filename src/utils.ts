import { concat, flatten, groupBy, head, keys, map, pipe, reduce, values } from 'ramda';
import * as vscode from 'vscode';

import { CategoryPackageVersionSeverity, PackageVersionSeverity, VersionSeverity } from './types';
import { Result } from './types/generated';
import { CategoryPackageVersionSeverityMerged } from './types/utils';

// FIXME Make generic
const mapValuesAndFlatten = pipe(
  map(values as (x: { [x: string]: { [y: string]: string } }) => { [x: string]: string }[]),
  flatten,
);
// FIXME Type arguments to pipe should be removable
const groupBySeverity = pipe(
  pipe(
    map(values as (x: CategoryPackageVersionSeverity) => PackageVersionSeverity[]),
    flatten,
    map(values as (x: PackageVersionSeverity) => VersionSeverity[]),
    flatten,
    map(values as (x: VersionSeverity) => Result.Result[]),
    flatten,
  ),
  groupBy(
    pipe<[a: Result.Error | Result.Info | Result.Warning | Result.Style], string[], string>(
      keys,
      head,
    ),
  ),
);
export const cpvToMerged = (
  rawDiagnostics: CategoryPackageVersionSeverity[],
): CategoryPackageVersionSeverityMerged => {
  const messages = groupBySeverity(rawDiagnostics);
  return reduce(
    (acc, key) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      acc[key] = concat(acc[key], mapValuesAndFlatten(messages[key]) as any); // FIXME any
      return acc;
    },
    {
      _error: [],
      _info: [],
      _style: [],
      _warning: [],
    } as CategoryPackageVersionSeverityMerged, // FIXME this cast should not be necessary
    keys(messages) as (keyof CategoryPackageVersionSeverityMerged)[],
  );
};

export const getFilePath = (doc: vscode.TextDocument) => {
  if (doc.uri.scheme === 'git') {
    return (JSON.parse(doc.uri.query || '{}') as { path: string }).path;
  }
  return doc.uri.fsPath;
};
