import * as figlet from "figlet";
import * as path from "path";
import * as jest from "jest"

const configPath = path.resolve(
  __dirname,
  "../../lib/cli/config/core-jest.config.js"
);

console.log(
  figlet.textSync("Contour-BET", {
    font: "slant",
    horizontalLayout: "default",
    verticalLayout: "default"
  })
);

jest.run(["--config", configPath]);
