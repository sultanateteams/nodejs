console.log(process.argv);

const logger = () => {
  const resp = {};
  for (let i = 2; i < process.argv.length; i++) {
    const args = process.argv[i].split("=");
    console.log(args);
    resp[args[0]] = args[1] ? args[1] : true;
  }
  return resp;
};

console.log(logger());
