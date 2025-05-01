import getArgs from "./helpers/args.js";
import getWeather from "./services/api.service.js";
import {
  printError,
  printSuccess,
  printHelp,
} from "./services/log.services.js";
import { saveKeyValue, getKeyValue } from "./services/storage.service.js";

const getForcast = async () => {
  const args = await getArgs(process.argv);
  console.log("args:  ", args);
  try {
    const response = await getWeather();
    console.log("response:  ", response.data);
  } catch (error) {
    if (error?.response?.status == 404) {
      printError("City not found");
    } else if (error?.response?.status == 401) {
      printError("Invalid token");
    } else {
      printError(error.message);
    }
  }
};

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

const saveCity = async (value) => {
  try {
    if (value == true) {
      printError("City doesn't exist");
      return false;
    }
    saveKeyValue("city", value);
    printSuccess("Saving city");
  } catch (error) {
    console.log(error);
  }
};

const startCli = async () => {
  const args = await getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return await saveCity(process.env.CITY ?? args.s);
  }
  if (args.t) {
    return await saveToken(process.env.TOKEN ?? args.t);
  }
  return await getForcast();
};

startCli();
