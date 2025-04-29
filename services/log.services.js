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
                    -s [CITY] for install sity
                    -h for help
                    -t [API_KEY] for saving token`);
};

export { printError, printSuccess, printHelp };
