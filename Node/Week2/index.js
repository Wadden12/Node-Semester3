const path = require("path");
const process = require("process");
const fs = require("fs");

console.log("current working directory: " + process.cwd());
try {
  process.chdir("./pictures");
  console.log("working directory after " + "changing: " + process.cwd());
} catch (err) {
  console.error("error occured while " + "changing directory: " + err);
}

// add a new file to the new directory, open the file if it already exists
fs.writeFile("newfile.txt", "Learn Node FS module", function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});
