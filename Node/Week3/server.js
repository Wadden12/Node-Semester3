const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  let path = "./views/";
  switch (request.url) {
    case "/":
      console.log("Top of the localhost:3000 website ");
      path += "home.html";

      fs.readFile(path, function (err, data) {
        if (err) {
          console.log(err);
          response.end();
        } else {
          console.log("file was served.");
          response.writeHead(response.statusCode, {
            "Content-Type": "text/html",
          });
          response.write(data);
          response.end();
        }
      });
      response.setHeader("Content_Type", "text/plain");
      response.write("Unwelcome to the bad machine!");
      response.end();
      break;
    case "/test":
      path += "test.html";
      fs.readFile(path, function (err, data) {
        if (err) {
          console.log(err);
          response.end();
        } else {
          console.log("test.html was read");
          response.writeHead(response.statusCode, {
            "Content-Type": "text/html",
          });
          response.write(data);
          response.end();
        }
      });
    default:
      console.log("Everything else ");
      response.setHeader("Content_Type", "text/plain");
      response.write("Every other Route!");
      response.end();
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000.");
});
