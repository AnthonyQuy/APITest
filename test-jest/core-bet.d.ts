interface CoreBET {
  logLevel: string;
  snapshotDir: string;
  rootDir: string;
  reportOption: ReportOption;
  testMatch: Array;
  overrideConfigPath:string;
}

interface ReportOption {
  append?: boolean;
  boilerplate?: string;
  customScriptPath?: string;
  dateFormat?: string;
  executionTimeWarningThreshold?: number;
  includeConsoleLog?: boolean;
  includeFailureMsg?: boolean;
  logo?: string;
  outputPath?: string;
  pageTitle?: string;
  sort?: JestHTMLReporterSortType;
  statusIgnoreFilter?: string;
  styleOverridePath?: string;
  theme?: string;
  useCssFile?: boolean;
}

declare let corebet: CoreBET;
