// FIXME remove type and get keys from types/generated
export const CATEGORY_TO_VARIABLE_MAPPING: { [key: string]: string } = {
  ArchesOutOfSync: 'KEYWORDS',
  ArchesWithoutProfiles: 'KEYWORDS',
  BadDefaultUseFlags: 'IUSE',
  BadDescription: 'DESCRIPTION',
  BadHomepage: 'HOMEPAGE',
  BadKeywords: 'KEYWORDS',
  BadProtocol: 'SRC_URI',
  BannedEapi: 'EAPI',
  BetterCompressionUri: 'SRC_URI',
  DeprecatedEapi: 'EAPI',
  DeprecatedEclass: 'inherit',
  DeprecatedLicense: 'LICENSE',
  DeprecatedProfileEapi: 'EAPI',
  DroppedKeywords: 'KEYWORDS',
  DuplicateEclassInherit: 'inherit ',
  DuplicateKeywords: 'KEYWORDS',
  EAPIChangeWithoutRevbump: 'EAPI',
  HomepageInSrcUri: 'SRC_URI',
  IncorrectCopyright: '# Copyright ',
  InvalidCopyright: '# Copyright ',
  InvalidLicenseHeader: '# Distributed ',
  InvalidUseFlags: 'IUSE',
  MatchingGlobalUse: 'IUSE',
  MissingEAPIBlankLine: 'EAPI',
  MissingLicense: 'LICENSE',
  MissingLocalUseDesc: 'IUSE',
  MissingPythonEclass: 'inherit ',
  MissingUri: 'SRC_URI',
  MultipleKeywordsLines: 'KEYWORDS',
  NonGentooAuthorsCopyright: '# Copyright ',
  ObsoleteUri: 'SRC_URI',
  OldGentooCopyright: '# Copyright ',
  OverlappingKeywords: 'KEYWORDS',
  PotentialGlobalUse: 'IUSE',
  PotentialLocalUse: 'IUSE',
  ProbableGlobalUse: 'IUSE',
  ProbableUseExpand: 'IUSE',
  ProvidedEclassInherit: 'inherit ',
  PythonCompatUpdate: 'PYTHON_COMPAT',
  PythonPEP517WithoutRevbump: 'DISTUTILS_USE_PEP517',
  RdependChange: 'RDEPEND',
  RedundantLongDescription: 'DESCRIPTION',
  RedundantUriRename: 'SRC_URI',
  RequiredUseDefaults: 'REQUIRED_USE',
  SrcUriChecksumChange: 'SRC_URI',
  StaticSrcUri: 'SRC_URI',
  SuspiciousSrcUriChange: 'SRC_URI',
  TarballAvailable: 'SRC_URI',
  UnderscoreInUseFlag: 'IUSE',
  UnknownKeywords: 'KEYWORDS',
  UnknownLicense: 'LICENSE',
  UnknownLicenses: 'LICENSE',
  UnknownMirror: 'SRC_URI',
  UnknownProfileArch: 'KEYWORDS',
  UnknownProfilePackageKeywords: 'KEYWORDS',
  UnknownProfileUse: 'IUSE',
  UnknownProfileUseExpand: 'USE_EXPAND',
  UnknownRestrict: 'RESTRICT',
  UnknownUseFlags: 'IUSE',
  UnnecessaryLicense: 'LICENSE',
  UnsortedKeywords: 'KEYWORDS',
  UnstatedIuse: 'IUSE',
  UnusedEclasses: 'inherit ',
  UnusedGlobalUse: 'IUSE',
  UnusedGlobalUseExpand: 'USE_EXPAND',
  UnusedInherits: 'inherit ',
  UnusedLicenses: 'LICENSE',
  UnusedLocalUse: 'IUSE',
  UnusedMirrors: 'SRC_URI',
  UseFlagWithoutDeps: 'IUSE',
  VirtualWithBdepend: 'BDEPEND',
  VirtualWithDepend: 'DEPEND',
};
