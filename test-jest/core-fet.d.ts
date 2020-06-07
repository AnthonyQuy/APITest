interface CoreBET {
  capabilities: Array<object>;
  framework: string;
  logLevel: string;
  pageLocale: string;
  vr: VR;
  screenshots: Screenshots;
  reports: Reports;
  browserTimeouts: number;
  baseUrl: string;
  specs: Array<string>;
  overrideConfigPath: string;
  outputDir: string;
  stepDefinitions: Array<string>;
  locators: Array<string>;
  pages: Map<string, PageLocators>;
  runType: string;
}

declare let corebet: CoreBET;
