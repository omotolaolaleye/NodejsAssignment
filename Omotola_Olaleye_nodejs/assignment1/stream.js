// The Stream module provides a way of handling streaming data.
// There are two types of streams: readable and writeable.
// An example of a readable stream is the response object you get when working with the http.createServer() method.
// An example of a writable stream is the request object you get when working with the http.createServer() method.

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hola mi amigos!');
  res.end();
}).listen(8080);
