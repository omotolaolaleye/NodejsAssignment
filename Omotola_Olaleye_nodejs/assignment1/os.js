// The OS module provides information about the computer's operating system.

var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Free memory: " + os.freemem());