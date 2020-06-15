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
var jest_config_1 = require("jest-config");
var configLoader_1 = __importDefault(require("../configLoader"));
var argLoader_1 = __importDefault(require("../argLoader"));
var path = __importStar(require("path"));
configLoader_1.default(argLoader_1.default());
var config = JSON.parse(JSON.stringify(jest_config_1.defaults));
config.rootDir = path.resolve(process.cwd(), "./");
config.reporters = [
    "default",
    [
        //https://www.npmjs.com/package/jest-html-reporter
        "./node_modules/jest-html-reporter",
        {
            pageTitle: "Test Report",
            outputPath: "./report/result.html",
        },
    ],
];
config.testMatch = ["**/?(*.)+(spec|test).[tj]s?(x)"];
module.exports = config;
