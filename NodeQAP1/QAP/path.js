// going to be looking at path

const path = require("path");
// gives details on the file path,js
let pathObject = path.parse(__filename);

console.log(pathObject);
