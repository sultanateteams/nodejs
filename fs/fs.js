const path = require("path");
const fs = require("fs");

// fs.mkdir(path.join(__dirname, 'tesmplates'), err => {
//     if(err) throw new Error()

//     console.log('Success created file')
// })

// fs.mkdirSync(path.join(__dirname, "notes"), (err) => {
//   if (err) throw new Error();

//   console.log("Success created file");
// });

fs.writeFile(
  path.join(__dirname, "notes", "december.txt"),
  "Created new course NodeJS",
  (err) => {
    if (err) throw new Error();
    console.log("Successfully writed");

    fs.appendFile(
      path.join(__dirname, "notes", "december.txt"),
      " and microservice project.",
      (err) => {
        if (err) throw new Error();
        console.log("Succesfully file appended");

        fs.readFile(
          path.join(__dirname, "notes", "december.txt"),
          (err, data) => {
            if (err) throw new Error();
            console.log(Buffer.from(data).toString());
          }
        );
      }
    );
  }
);
