"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseConfig_1 = __importDefault(require("./config/baseConfig"));
var path = __importStar(require("path"));
var deepmerge_1 = __importDefault(require("deepmerge"));
var logger_1 = __importDefault(require("../util/logger"));
exports.default = (function (cliArgs) {
    logger_1.default.info(cliArgs);
    var userConfigPath = path.join(process.cwd(), cliArgs.config);
    var userConfig = require(userConfigPath);
    var overwriteMerge = function (destinationArray, sourceArray, options) { return sourceArray; };
    var mergedConfig = deepmerge_1.default(baseConfig_1.default, userConfig, {
        arrayMerge: overwriteMerge,
    });
    logger_1.default.info(JSON.stringify(mergedConfig, null, 2));
    global.corebet = {
        overrideConfigPath: userConfigPath,
        logLevel: mergedConfig.logLevel,
        reportOption: mergedConfig.reportOption,
        snapshotDir: mergedConfig.snapshotDir,
        rootDir: mergedConfig.rootDir,
        testMatch: mergedConfig.testMatch
    };
});
