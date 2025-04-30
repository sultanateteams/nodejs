import fs from "fs";
import path from "path";
import os from "os";

const filePath = path.join(os.homedir(), "weather.json");

const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isExist(filePath)) {
    const file = await fs.promises.readFile(filePath);
    data = JSON.parse(file);
  }
  console.log(key, value);

  data[key] = value;
  console.log(data);
  fs.promises.writeFile(filePath, JSON.stringify(data));
};

const isExist = async (path) => {
  try {
    await fs.promises.stat(path);
    return true;
  } catch {
    return false;
  }
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await fs.promises.readFile(filePath);
    const value = JSON.parse(file)[key];
    return value;
  }
  return undefined;
};

export { saveKeyValue, getKeyValue };
