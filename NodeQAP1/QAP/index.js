// Title QAP 1 Node
// Author: Mike Wadden
// Date: May 12, 2022

// Buffer:  Buffers modules provides a way of handling streams of binary data.

// Buffers were introduced to help developers deal with binary data, in an ecosystem that traditonally
// only dealt with strings rather than binaries.

// A buffer is like an array of integers, which each represent a byte of data.

// Console: is class with methods such as console.log(), console.error() and console.warn()
// that can be used to write any Node.js steam.

// there is also the global console instance configured to write process.stdout and process.stderr.
// The global console can used without calling required('node:console).

// example would be console.log('Hello World') to display Hello World on console.

// File System:  Allows you to work with file systems on your computer. You can Read file or write to files useing
// this core object.

// Events: Every action on a computer is an event. Like when a connection is made or a file is opened.
// Objects in Node.js can fire events, like the readstream object fires events when opening and closing a file.

// http: HTTP allows Node.js to transfer data over the hyper text protocol. The http module can create
// an HTTP server that listens to server ports and gives a response back to the cilent.

// use the createServer() method is used to create an HTTP server.

// globals:  console.log(), setTimeout(), clearTimeout(), setInterval(), clearInterval. are examples of gobal objects.
// they could be written like global.setTimeout but that is not required so just setTimeout will be fine.

// Steam: Steams are one of the fundamental concepts that power Node.js applications.

// They are a way to handle reading/writing files, network communications, or any kind of end to end
// information exchange in an efficient way.

// with this example instead of waiting until the file is fully read it starts steaming to the HTTP client
// as soon as we have a chunk of data ready to be sent.

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   const stream = fs.createReadStream(`${__dirname}/data.txt`);
//   stream.pipe(res);
// });
// server.listen(3000);

// url: Module splits up a web address into readable parts. As example you can use the url.parse()
// method and it will return a url object with each part of the address as properties.

// Path:  Module provides utilities for working with file and directory paths.

// os: Module provides functions that can be used to retrieve information from the underlying operations
// system and the computer the program runs on and interact with it.

// Process: object provides information about and control over the current node.js process.
