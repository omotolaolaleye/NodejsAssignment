// This module provides functionality for creating secure TLS/SSL encrypted connections

const tls = require('tls');
const fs = require('fs');

// create a secure server
const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
};
const server = tls.createServer(options, (socket) => {
  socket.write('Hello senoritas');
  socket.end();
});

// listen for connections
server.listen(3000);
