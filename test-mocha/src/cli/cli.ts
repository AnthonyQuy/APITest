
import * as path from "path";
import * as Mocha from "mocha";
import { getMatchedFilesFromGlobArray } from "../util/fileUtil";

let testDir = "../../examples/specs/*js";

const reportDirectory = path.resolve(__dirname, `../execution-report/`);

const mocha = new Mocha({
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


let specs = getMatchedFilesFromGlobArray(__dirname, [testDir]);

specs.forEach((spec) => {
  mocha.addFile(spec);
});

mocha.run();
