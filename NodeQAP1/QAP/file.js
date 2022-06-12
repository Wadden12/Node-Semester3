// a look at the file global object

const fs = require("fs");

// shows the files in the QAP folder and provides a error message if the directory is incorrect

fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
