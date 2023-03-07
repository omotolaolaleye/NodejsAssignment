// The Net module provides a way of creating TCP servers and TCP clients.

const net = require('net');
 
const server = net.createServer();
 
server.listen(3000, () => {  
  console.log('Server listening on port 8000!');  
});  