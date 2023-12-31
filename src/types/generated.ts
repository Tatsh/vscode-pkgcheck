// This file is generated. Do not modify.
export namespace Result {
  export type Error =
    | { _error: { ArchesOutOfSync: string } }
    | { _error: { BadDefaultUseFlags: string } }
    | { _error: { BadDependency: string } }
    | { _error: { BadProtocol: string } }
    | { _error: { BannedCharacter: string } }
    | { _error: { BannedEapi: string } }
    | { _error: { BannedEapiCommand: string } }
    | { _error: { BannedProfileEapi: string } }
    | { _error: { BinaryFile: string } }
    | { _error: { ConflictingAccountIdentifiers: string } }
    | { _error: { ConflictingChksums: string } }
    | { _error: { DirectNoMaintainer: string } }
    | { _error: { DirectStableKeywords: string } }
    | { _error: { DoublePrefixInPath: string } }
    | { _error: { DroppedStableKeywords: string } }
    | { _error: { DroppedUnstableKeywords: string } }
    | { _error: { EclassBashSyntaxError: string } }
    | { _error: { EclassExportFuncsBeforeInherit: string } }
    | { _error: { EmptyCategoryDir: string } }
    | { _error: { EmptyPackageDir: string } }
    | { _error: { EqualVersions: string } }
    | { _error: { InvalidCopyright: string } }
    | { _error: { InvalidLicenseHeader: string } }
    | { _error: { InvalidMetadataRestrict: string } }
    | { _error: { InvalidPN: string } }
    | { _error: { InvalidUseFlags: string } }
    | { _error: { InvalidUTF8: string } }
    | { _error: { MismatchedPN: string } }
    | { _error: { MisplacedEclassVar: string } }
    | { _error: { MissingLicense: string } }
    | { _error: { MissingManifest: string } }
    | { _error: { MissingMove: string } }
    | { _error: { MissingSignOff: string } }
    | { _error: { MissingSlash: string } }
    | { _error: { MissingSlotmove: string } }
    | { _error: { NonexistentProfilePath: string } }
    | { _error: { NonGentooAuthorsCopyright: string } }
    | { _error: { NonsolvableDeps: string } }
    | { _error: { OutsideRangeAccountIdentifier: string } }
    | { _error: { PythonEclassError: string } }
    | { _error: { PythonHasVersionMissingPythonUseDep: string } }
    | { _error: { SrcUriChecksumChange: string } }
    | { _error: { StableKeywordsOnTestingEapi: string } }
    | { _error: { UnknownKeywords: string } }
    | { _error: { UnknownLicense: string } }
    | { _error: { UnknownMirror: string } }
    | { _error: { UnknownUseFlags: string } }
    | { _error: { UnstatedIuse: string } }
    | { _error: { VulnerablePackage: string } };
  export type Info =
    | { _info: { LaggingStable: string } }
    | { _info: { MissingRemoteId: string } }
    | { _info: { OutdatedBlocker: string } }
    | { _info: { PotentialGlobalUse: string } }
    | { _info: { PotentialLocalUse: string } }
    | { _info: { PotentialStable: string } }
    | { _info: { PythonCompatUpdate: string } }
    | { _info: { PythonMismatchedPackageName: string } }
    | { _info: { RedundantVersion: string } }
    | { _info: { StableRequest: string } }
    | { _info: { UnstableOnly: string } }
    | { _info: { VirtualKeywordsUpdate: string } };
  export type Style =
    | { _style: { BadCommitSummary: string } }
    | { _style: { BadDescription: string } }
    | { _style: { BetterCompressionUri: string } }
    | { _style: { DuplicateEclassInherit: string } }
    | { _style: { DuplicateKeywords: string } }
    | { _style: { ExcessiveLineLength: string } }
    | { _style: { HomepageInSrcUri: string } }
    | { _style: { InvalidCommitMessage: string } }
    | { _style: { InvalidCommitTag: string } }
    | { _style: { MissingEAPIBlankLine: string } }
    | { _style: { MultipleKeywordsLines: string } }
    | { _style: { NoFinalNewline: string } }
    | { _style: { ObsoleteUri: string } }
    | { _style: { OverlappingKeywords: string } }
    | { _style: { ProbableGlobalUse: string } }
    | { _style: { ProvidedEclassInherit: string } }
    | { _style: { PythonHasVersionUsage: string } }
    | { _style: { RedundantDodir: string } }
    | { _style: { RedundantLongDescription: string } }
    | { _style: { RedundantUriRename: string } }
    | { _style: { ReferenceInMetadataVar: string } }
    | { _style: { StaticSrcUri: string } }
    | { _style: { TarballAvailable: string } }
    | { _style: { TrailingEmptyLine: string } }
    | { _style: { UnderscoreInUseFlag: string } }
    | { _style: { UnnecessarySlashStrip: string } }
    | { _style: { UnsortedKeywords: string } };
  export type Warning =
    | { _warning: { AbsoluteSymlink: string } }
    | { _warning: { ArchesWithoutProfiles: string } }
    | { _warning: { BadFilename: string } }
    | { _warning: { BadHomepage: string } }
    | { _warning: { BadKeywords: string } }
    | { _warning: { BadWhitespaceCharacter: string } }
    | { _warning: { DeprecatedChksum: string } }
    | { _warning: { DeprecatedDep: string } }
    | { _warning: { DeprecatedEapi: string } }
    | { _warning: { DeprecatedEapiCommand: string } }
    | { _warning: { DeprecatedEclass: string } }
    | { _warning: { DeprecatedEclassFunction: string } }
    | { _warning: { DeprecatedEclassVariable: string } }
    | { _warning: { DeprecatedInsinto: string } }
    | { _warning: { DeprecatedLicense: string } }
    | { _warning: { DeprecatedProfileEapi: string } }
    | { _warning: { DistutilsNonPEP517Build: string } }
    | { _warning: { DroppedKeywords: string } }
    | { _warning: { DuplicateFiles: string } }
    | { _warning: { EAPIChangeWithoutRevbump: string } }
    | { _warning: { EbuildReservedName: string } }
    | { _warning: { EbuildSemiReservedName: string } }
    | { _warning: { EclassDocError: string } }
    | { _warning: { EclassDocMissingFunc: string } }
    | { _warning: { EclassDocMissingVar: string } }
    | { _warning: { EclassReservedName: string } }
    | { _warning: { EclassUserVariableUsage: string } }
    | { _warning: { EendMissingArg: string } }
    | { _warning: { EmptyFile: string } }
    | { _warning: { EmptyProject: string } }
    | { _warning: { ExecutableFile: string } }
    | { _warning: { IncorrectCopyright: string } }
    | { _warning: { IndirectInherits: string } }
    | { _warning: { InstallCompressedInfo: string } }
    | { _warning: { InstallCompressedManpage: string } }
    | { _warning: { InternalEclassUsage: string } }
    | { _warning: { InvalidRemoteID: string } }
    | { _warning: { LaggingProfileEapi: string } }
    | { _warning: { LiveOnlyPackage: string } }
    | { _warning: { MaintainerNeeded: string } }
    | { _warning: { MaintainerWithoutProxy: string } }
    | { _warning: { MatchingChksums: string } }
    | { _warning: { MatchingGlobalUse: string } }
    | { _warning: { MismatchedPerlVersion: string } }
    | { _warning: { MisplacedWeakBlocker: string } }
    | { _warning: { MissingAccountIdentifier: string } }
    | { _warning: { MissingChksum: string } }
    | { _warning: { MissingInherits: string } }
    | { _warning: { MissingLicenseRestricts: string } }
    | { _warning: { MissingLocalUseDesc: string } }
    | { _warning: { MissingPackageRevision: string } }
    | { _warning: { MissingPythonEclass: string } }
    | { _warning: { MissingSlotDep: string } }
    | { _warning: { MissingTestRestrict: string } }
    | { _warning: { MissingUnpackerDep: string } }
    | { _warning: { MissingUri: string } }
    | { _warning: { MissingUseDepDefault: string } }
    | { _warning: { MultiMovePackageUpdate: string } }
    | { _warning: { NonexistentBlocker: string } }
    | { _warning: { NonexistentCategories: string } }
    | { _warning: { NonexistentDeps: string } }
    | { _warning: { NonexistentProjectMaintainer: string } }
    | { _warning: { NonPosixHeadTailUsage: string } }
    | { _warning: { OldGentooCopyright: string } }
    | { _warning: { OldMultiMovePackageUpdate: string } }
    | { _warning: { OldPackageUpdate: string } }
    | { _warning: { ProbableUseExpand: string } }
    | { _warning: { ProfileMissingImplicitExpandValues: string } }
    | { _warning: { ProxyWithoutProxied: string } }
    | { _warning: { PythonAnyMismatchedDepHasVersionCheck: string } }
    | { _warning: { PythonAnyMismatchedUseHasVersionCheck: string } }
    | { _warning: { PythonGHDistfileSuffix: string } }
    | { _warning: { PythonInlinePyPIURI: string } }
    | { _warning: { PythonMissingDeps: string } }
    | { _warning: { PythonMissingRequiredUse: string } }
    | { _warning: { PythonMissingSCMDependency: string } }
    | { _warning: { PythonPEP517WithoutRevbump: string } }
    | { _warning: { PythonRuntimeDepInAnyR1: string } }
    | { _warning: { RdependChange: string } }
    | { _warning: { ReadonlyVariable: string } }
    | { _warning: { RedundantPackageUpdate: string } }
    | { _warning: { RequiredUseDefaults: string } }
    | { _warning: { SizeViolation: string } }
    | { _warning: { StaleLiveEAPI: string } }
    | { _warning: { SuspiciousSrcUriChange: string } }
    | { _warning: { TotalSizeViolation: string } }
    | { _warning: { UncheckableDep: string } }
    | { _warning: { UnknownCategoryDirs: string } }
    | { _warning: { UnknownLicenses: string } }
    | { _warning: { UnknownManifest: string } }
    | { _warning: { UnknownPkgDirEntry: string } }
    | { _warning: { UnknownProfileArch: string } }
    | { _warning: { UnknownProfilePackage: string } }
    | { _warning: { UnknownProfilePackageKeywords: string } }
    | { _warning: { UnknownProfilePackageUse: string } }
    | { _warning: { UnknownProfileUse: string } }
    | { _warning: { UnknownProfileUseExpand: string } }
    | { _warning: { UnknownProfileUseExpandValue: string } }
    | { _warning: { UnknownProperties: string } }
    | { _warning: { UnknownRestrict: string } }
    | { _warning: { UnmatchedProfilePackageUnmask: string } }
    | { _warning: { UnnecessaryLicense: string } }
    | { _warning: { UnnecessaryManifest: string } }
    | { _warning: { UnquotedVariable: string } }
    | { _warning: { UnsupportedEclassEapi: string } }
    | { _warning: { UnusedEclasses: string } }
    | { _warning: { UnusedGlobalUse: string } }
    | { _warning: { UnusedGlobalUseExpand: string } }
    | { _warning: { UnusedInherits: string } }
    | { _warning: { UnusedInMastersEclasses: string } }
    | { _warning: { UnusedInMastersGlobalUse: string } }
    | { _warning: { UnusedInMastersLicenses: string } }
    | { _warning: { UnusedInMastersMirrors: string } }
    | { _warning: { UnusedLicenses: string } }
    | { _warning: { UnusedLocalUse: string } }
    | { _warning: { UnusedMirrors: string } }
    | { _warning: { UnusedProfileDirs: string } }
    | { _warning: { UseFlagWithoutDeps: string } }
    | { _warning: { VariableScope: string } }
    | { _warning: { VirtualWithBdepend: string } }
    | { _warning: { VirtualWithDepend: string } }
    | { _warning: { VirtualWithSingleProvider: string } }
    | { _warning: { VisibleVcsPkg: string } }
    | { _warning: { WrongMaintainerType: string } };
  export type Result = Error | Info | Style | Warning;
}
