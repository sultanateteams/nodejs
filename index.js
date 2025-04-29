import getArgs from "./helpers/args.js";
import {
  printError,
  printSuccess,
  printHelp,
} from "./services/log.services.js";
import { saveKeyValue, getKeyValue } from "./services/storage.service.js";

const startCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    console.log("token", args.s);
    printSuccess("Saving city");
    saveKeyValue("token", args.s);
  }
  if (args.t) {
    printSuccess("Saving token");
  }
};

startCli();
