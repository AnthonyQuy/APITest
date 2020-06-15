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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchedFilesFromGlobArray = void 0;
// import * as fs from "fs";
var path = __importStar(require("path"));
var glob = __importStar(require("glob"));
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
