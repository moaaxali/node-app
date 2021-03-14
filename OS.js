const os = require('os');

// Returns the operating system CPU architecture for which the Node.js binary
// was compiled.
const osArchitechture = os.arch();
// Contains commonly used operating system-specific constants for error codes,
// process signals, and so on.
const osConstants = os.constants;
// Returns an array of objects containing information about each logical CPU core.
const cpus = os.cpus();
// Returns a string identifying the endianness of the CPU for which the Node.js
// binary was compiled.
const endianess = os.endianness();
// Returns the amount of free system memory in bytes as an integer.
const freemem = os.freemem();
// Returns the scheduling priority for the process specified by pid. If pid is
// not provided or is 0, the priority of the current process is returned.
const priority = os.getPriority(12);
// Returns the string path of the current user's home directory.
const homedir = os.homedir();
// Returns the host name of the operating system as a string.
const hostname = os.hostname();
// Returns an array containing the 1, 5, and 15 minute load averages.
const loadavg = os.loadavg();
// Returns an object containing network interfaces that have been assigned a
// network address.
const networkinterfaces = os.networkInterfaces();
// Returns a string identifying the operating system platform.
const platform = os.platform();

console.log(osArchitechture);
console.log(osConstants);
console.log(cpus);
console.log(endianess);
console.log(freemem);
console.log(priority);
console.log(homedir);
console.log(hostname);
console.log(loadavg);
console.log(networkinterfaces);
console.log(platform);
