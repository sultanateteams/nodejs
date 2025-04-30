import https from "https";
import { getKeyValue } from "./storage.service.js";
import axios from "axios";

const getWeather = async (city) => {
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");

  const token = await getKeyValue("token");

  if (!token) {
    throw new Error("Token doesn't exist -t [API_KEY] for saving token");
  }
  const data = {
    params: { q: city, appid: token, lang: "en", units: "metric" },
  };
  console.log(data);
  const result = await axios.get(url, data);
  console.log(result.data);
  //   url.searchParams.append("q", city);
  //   url.searchParams.append("appid", token);
  //   url.searchParams.append("lang", "en");
  //   url.searchParams.append("units", "metric");
  //   https.get(url, (response) => {
  //     let result = "";
  //     response.on("data", (chunk) => {
  //       result += chunk;
  //     });
  //     response.on("end", () => {
  //       console.log(result);
  //     });
  //   });
};

export default getWeather;
