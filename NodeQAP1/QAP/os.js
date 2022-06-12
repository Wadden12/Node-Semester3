// in this file we are going to look at the OS module and added the global setTimeout.

const os = require("os");

// simple program using the os module to look at the different method for os to display information the computer system
console.log("");
console.log(
  `The last time your Computer was rebooted ${(os.uptime() / 3600).toFixed(
    2
  )} hours. The platform is ${os.platform()} the current version is ${os.release()} the Architecture is ${os.arch()}. 
  The hostname is ${os.hostname()} and the amount of free memory on the system is ${os.freemem()}.`
);

console.log("");

//put a 5 second delay before showing the system info to avoid having to much clutter in the terminal on launch

setTimeout(() => {
  console.log("System Information");
  console.log("");
  const cpu = os.cpus();
  let numCores = 0;
  // useing the loop to go through the objects from os.cpus
  cpu.forEach((element) => {
    numCores++;
    console.log("Logical core " + numCores + " :");
    console.log(element);
  });

  console.log("total number of logical core is " + numCores);
}, 4000);
