import getArgs from "./helpers/args.js";
import {
  printError,
  printSuccess,
  printHelp,
} from "./services/log.services.js";

const startCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    printSuccess("Saving city");
  }
  if (args.t) {
    printSuccess("Saving token");
  }
};

startCli();
