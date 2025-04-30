import getArgs from "./helpers/args.js";
import getWeather from "./services/api.service.js";
import {
  printError,
  printSuccess,
  printHelp,
} from "./services/log.services.js";
import { saveKeyValue, getKeyValue } from "./services/storage.service.js";

const saveToken = async (value) => {
  try {
    if (value == true) {
      printError("Token doesn't exist");
      return false;
    }
    saveKeyValue("token", value);
    printSuccess("Saving token");
  } catch (error) {
    console.log(error);
  }
};

const startCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    // printSuccess("Saving city");
    getWeather(args.s);
  }
  if (args.t) {
    saveToken(args.t);
  }
};

startCli();
