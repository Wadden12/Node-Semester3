const fs = require("fs");
const http = require("http");
const process = require("process");
const port = process.env.PORT || 3000;

console.log(`current working directory: ${process.cwd()}`);

try {
  process.chdir("./text");
  console.log(`working directory after changing: ${process.cwd()}`);
} catch (err) {
  console.log(`error occured while changing directory: ${err}`);
}

fs.writeFile("newfile.txt", "Learn Node FS module", (err) => {
  if (err) throw err;
  console.log("File is created successfully.");
});

function serveFile(filename) {
  http
    .createServer((req, res) => {
      fs.readFile(filename, (err, data) => {
        if (err) console.log(err);
        else {
          console.log(`file ${filename} was served.`);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    })
    .listen(3000);
}

serveFile("newfile.txt");

function serveFile(filename) {
  http
    .createServer((req, res) => {
      fs.readFile(filename, function (err, data) {
        if (err) console.log(err);
        else {
          console.log("file " + filename + " was served.");
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    })
    .listen(3000);
}
