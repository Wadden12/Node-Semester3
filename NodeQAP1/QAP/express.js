const express = require("express");
const app = express();
const _ = require("lodash");

app.use(express.json());

const qap = [
  { id: 1, name: "Http" },
  { id: 2, name: "Events" },
  { id: 3, name: "File Systems" },
  { id: 4, name: "Console" },
  { id: 5, name: "Buffer" },
  { id: 6, name: "Globals" },
  { id: 7, name: "Stream" },
  { id: 8, name: "Url" },
  { id: 9, name: "Path" },
  { id: 10, name: "OS" },
  { id: 11, name: "Process" },
];

let log = () => {
  console.log(
    "Note: This module features are triggered by working with end points on that URL. Check out http://localhost:3000/api/qap after you run this file"
  );
};

let greet = _.once(log);

greet();

// setting up to handle GET requests
app.get("/", (req, res) => {
  res.send("Hello QAP World!!!");
});
// if you went to http://localhost:3000/api/qap it returns the array of objects below.
// the Array represents a API once it is created

app.get("/api/qap", (req, res) => {
  console.log("Send QAP object array data");
  res.send(qap);
});

// to add Data with post

app.post("/api/qap", (req, res) => {
  console.log("adding a new data from a post request");
  const object = {
    // creating a new id but looking at the length and adding 1
    id: qap.length + 1,
    // getting the name from the body
    name: req.body.name,
  };
  qap.push(object);
  res.send(object);
  console.log("add to the data and send a responce back to user");
});

// looking for a core global object by ID
// parseInt changes a string into a int so it can be matched
app.get("/api/qap/:id", (req, res) => {
  const object = qap.find((c) => c.id === parseInt(req.params.id));
  // we use 404 to represents data not found
  if (!qap)
    res.status(404).send("The global object with the given ID was not found.");
  console.log(`send data to the server based on the provided ID`);
  res.send(object);
  // in the browser if you type in http://localhost:3000/api/qap/3 it will return File Systems
});

// Read Enviroment Variable PORT making port dynamic if none is provided use default 3000

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
