import { Result } from './generated';

export interface VersionSeverity {
  [version: string]: Result.Error | Result.Info | Result.Style | Result.Warning;
}

export interface PackageVersionSeverity {
  [packageName: string]: VersionSeverity;
}

export interface CategoryPackageVersionSeverity {
  [category: string]: PackageVersionSeverity;
}
