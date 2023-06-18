import { Result } from "./generated";

export interface CategoryPackageVersionSeverity {
  [category: string]: {
    [packageName: string]: {
      [version: string]:
        | Result.Error
        | Result.Info
        | Result.Style
        | Result.Warning;
    };
  };
}
