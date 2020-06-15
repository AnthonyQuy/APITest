import * as yargs from "yargs";

export default () => {
  const opts = {
    config: {
      alias: "c",
      describe: "Path for the test run config"
    }
  };
  return yargs.option(opts).demandOption("config").help().argv;
};
