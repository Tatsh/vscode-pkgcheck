import concat from 'ramda/es/concat';
import flatten from 'ramda/es/flatten';
import groupBy from 'ramda/es/groupBy';
import head from 'ramda/es/head';
import keys from 'ramda/es/keys';
import map from 'ramda/es/map';
import pipe from 'ramda/es/pipe';
import reduce from 'ramda/es/reduce';
import values from 'ramda/es/values';
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
