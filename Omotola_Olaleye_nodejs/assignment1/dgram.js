// The dgram module provides a way of working with Datagram sockets. It can be used to send messages from one computer/server to another.

var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.on('message', function(msg, rinfo) {
  console.log('Message delivered: ' + msg.toString());
});
s.bind(8080);

var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.send(Buffer.from('Hola!'), 8080, 'localhost');