// this file looks at the use of the file systems, http and process global objects

const fs = require("fs");
const http = require("http");
const process = require("process");
const port = process.env.PORT || 3000;

console.log(`current working directory: ${process.cwd()}`);

//changes the directory.
try {
  process.chdir("./Text");
  console.log(`working directory after changing: ${process.cwd()}`);
} catch (err) {
  console.log(`error occured while changing directory: ${err}`);
}
// writes the following text into a txt file.
fs.writeFile(
  "node.txt",
  `Learn Node in one hour! 
  By learning the 11 core global objects. 
  1.Http: allows Node.js to transfer data over the hyper text protocol. The http module can create 
  2.Events: Every action on a computer is an event. Like when a connection is made or a file is opened. 
  3.Filesystems: Allows you to work with file systems on your computer. You can Read file or write to files useing this core object. 
  4.Console: is class with methods such as console.log(), console.error() and console.warn(). 
  5.Buffer: modules provides a way of handling streams of binary data. 
  6.Globals: console.log(), setTimeout(), clearTimeout(), setInterval(), clearInterval. are examples of gobal objects they could be written like global.setTimeout but that is not required so just setTimeout will be fine. 
  7.Stream: are one of the fundamental concepts that power Node.js applications.  
  8.Url: Module splits up a web address into readable parts. As example you can use the url.parse() method and it will return a url object with each part of the address as properties. 
  9.Path: Module provides utilities for working with file and directory paths. 
  10.Os: Module provides functions that can be used to retrieve information from the underlying operations 
  11.Process: object provides information about and control over the current node.js process. `,
  (err) => {
    if (err) throw err;
    console.log("File is created successfully.");
  }
);

// function to create a server useing http
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

serveFile("node.txt");

//creates a function to pass the text file to be added to http server.
function serveFile(filename) {
  http
    .createServer((req, res) => {
      fs.readFile(filename, function (err, data) {
        if (err) console.log(err);
        else {
          console.log(`file ${filename} was servered.`);

          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    })
    .listen(3000);
}
