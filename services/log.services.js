import chalk from "chalk";
import dedent from "dedent";

const printError = (message) => {
  console.log(dedent`${chalk.red("ERROR")} 
               ${message}`);
};

const printSuccess = (message) => {
  console.log(dedent`${chalk.green("SUCCESS")}
               ${message}`);
};

const printHelp = () => {
  console.log(dedent`
                    ${chalk.bgCyan("HELP")}
                    -s [CITY] for install city
                    -h for help
                    -t [API_KEY] for saving token`);
};

const printWeather = (response) => {
  console.log(dedent`${chalk.bgBlackBright("WEATHER")} 
                     City weather: ${response.name}
                     Temprature: ${response.main.temp} but feels like ${
                       response.main.feels_like
                     }
                     Humidity: ${response.main.hunidity}
                     Windspeed: ${response.wind.speed}
                    
  `);
};

export { printError, printSuccess, printHelp, printWeather };
