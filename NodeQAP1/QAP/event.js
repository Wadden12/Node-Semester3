// is the event Emitter Class
const EventEmitter = require("events");

// sets up the emitter object
const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", (arg) => {
  console.log("Listener Called", arg);
});

//Raised the event
emitter.emit("messageLogged", { id: 1, url: "https://www.google.ca/" });
