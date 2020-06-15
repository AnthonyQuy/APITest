import { defaults as defaultJestConfig } from "jest-config";

import configLoader from "../configLoader";
import argLoader from "../argLoader";
import * as path from "path";

configLoader(argLoader());

const config: any = JSON.parse(JSON.stringify(defaultJestConfig));

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

export = config;
