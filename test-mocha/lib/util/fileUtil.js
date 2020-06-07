"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchedFilesFromGlobArray = void 0;
// import * as fs from "fs";
var path = require("path");
var glob = require("glob");
function getMatchedFilesFromGlobArray(dir, paths) {
    var files = new Set();
    paths.forEach(function (p) {
        var matchedFiles = glob.sync(path.resolve(dir, p));
        if (matchedFiles.length) {
            matchedFiles.forEach(function (file) { return files.add(file); });
        }
    });
    return files;
}
exports.getMatchedFilesFromGlobArray = getMatchedFilesFromGlobArray;
