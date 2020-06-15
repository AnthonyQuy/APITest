import baseConfig from "./config/baseConfig";
import * as path from "path";
import deepmerge from "deepmerge";
import logger from "../util/logger";

export default (cliArgs: any) => {
  logger.info(cliArgs);

  const userConfigPath = path.join(process.cwd(), cliArgs.config);
  const userConfig = require(userConfigPath);

  const overwriteMerge = (
    destinationArray: any,
    sourceArray: any,
    options: any
  ) => sourceArray;
  const mergedConfig = deepmerge(baseConfig, userConfig, {
    arrayMerge: overwriteMerge,
  });

  logger.info(JSON.stringify(mergedConfig, null, 2));

  ((global as any).corebet as CoreBET) = {
    overrideConfigPath: userConfigPath,
    logLevel: mergedConfig.logLevel,
    reportOption: mergedConfig.reportOption,
    snapshotDir: mergedConfig.snapshotDir,
    rootDir: mergedConfig.rootDir,
    testMatch: mergedConfig.testMatch
  };
};
