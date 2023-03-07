// The HTTPS module provides a way of making Node.js transfer data over HTTP TLS/SSL protocol, which is the secure HTTP protocol.

var https = require("https");
https
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hola mi amigos!");
    res.end();
  })
  .listen(8000);
