//  The DNS module provides a way of performing name resolutions.

var dns = require('dns');
var w3 = dns.lookup('unsplash.com', function (err, addresses, family) {
  console.log(addresses);
});