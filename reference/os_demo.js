const os = require('os');
const { measureMemory } = require('vm');

// Platform
console.log(os.platform());

// CPU Arc
console.log(os.arch());

// CPU core info
// console.log(os.cpus());

// Free memory
// console.log(os.freemem());

// Total memory
// console.log(os.totalmem());

// Home dir
// console.log(os.homedir());

//Uptime
console.log(os.uptime());