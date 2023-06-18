import { flatten, groupBy, head, keys, map, pipe, values } from "ramda";

import { CategoryPackageVersionSeverity } from "./types";
import { Result } from "./types/generated";
import { CategoryPackageVersionSeverityMerged } from "./types/utils";

export const cpvToMerged = (
  rawDiag: CategoryPackageVersionSeverity[]
): CategoryPackageVersionSeverityMerged => {
  const messages = groupBy(
    pipe<
      [a: Result.Error | Result.Info | Result.Warning | Result.Style],
      string[],
      string
    >(keys, head),
    flatten(map(values, flatten(map(values, flatten(map(values, rawDiag))))))
  );
  const merged: { [x: string]: { [x: string]: string }[] } = {};
  for (const key of keys(messages)) {
    if (typeof merged[key] === "undefined") {
      merged[key] = [];
    }
    merged[key].push(flatten(messages[key].map(values)) as any);
  }
  return merged;
};
