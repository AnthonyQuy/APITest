"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var Mocha = require("mocha");
var fileUtil_1 = require("../util/fileUtil");
var testDir = "../../examples/specs/*js";
var reportDirectory = path.resolve(__dirname, "../execution-report/");
var mocha = new Mocha({
    timeout: 200000,
    reporter: "list",
    color: true,
    reporterOptions: {
        reportDir: reportDirectory,
        reportTitle: "Test Execution Report",
        reportPageTitle: "Test Report",
        charts: true,
    }
});
var specs = fileUtil_1.getMatchedFilesFromGlobArray(__dirname, [testDir]);
specs.forEach(function (spec) {
    mocha.addFile(spec);
});
mocha.run();
