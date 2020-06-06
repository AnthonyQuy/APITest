// import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";

export function getMatchedFilesFromGlobArray(dir: string, paths: string[]) {
  const files = new Set<string>();
  paths.forEach((p) => {
    const matchedFiles = glob.sync(path.resolve(dir, p));
    if (matchedFiles.length) {
      matchedFiles.forEach((file: any) => files.add(file));
    }
  });
  return files;
}
