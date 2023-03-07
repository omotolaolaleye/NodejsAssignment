// To run a child process. It provides functionality for spawning child processes in Node.js.

const { spawn } = require('child_process');

// spawn a child process to run a command
const child = spawn('ls', ['-l']);

// listen for the child process to exit
child.on('exit', (code, signal) => {
  console.log(`Child process exited with code ${code} and signal ${signal}`);
});

// listen for data from the child process
child.stdout.on('data', (data) => {
  console.log(`Data from child process: ${data}`);
});
