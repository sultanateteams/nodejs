const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset: utf-8" });
    if (req.url == "/") {
      fs.readFile(
        path.join(__dirname, "templates", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (req.url == "/about"){
      fs.readFile(
        path.join(__dirname, "templates", "about.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (req.url == "/contact") {
      fs.readFile(
        path.join(__dirname, "templates", "contact.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    }
  } else if (req.method == "POST") {
    const body = [];
    res.writeHead;
    req.on("data", (data) => {
      console.log("da");
      console.log(data);
      body.push(data);
    });
    req.on("end", () => {
      console.log(body);
      res.end("Successfully entred: " + body.toString().split("=")[1]);
    });
  }
});

server.listen(4321, () => {
  // console.log(e);
});
