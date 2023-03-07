// It provides functionality for working with terminal devices
const tty = require('tty');

// check if stdin is a TTY device
console.log(tty.isatty(0));
