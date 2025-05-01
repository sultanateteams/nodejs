import https from "https";
import { getKeyValue } from "./storage.service.js";
import axios from "axios";

const getWeather = async (city) => {
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  const token = process.env.TOKEN ?? (await getKeyValue("token"));
  const citys = process.env.CITY ?? city ?? (await getKeyValue("city"));
  if (!token) {
    throw new Error("Token doesn't exist -t [API_KEY] for saving token");
  }
  if (!citys) {
    throw new Error("Token doesn't exist -s [CITY] for install city");
  }
  const data = {
    params: { q: citys, appid: token, lang: "en", units: "metric" },
  };
  const result = await axios.get(url, data);
  return result;
};

export default getWeather;
