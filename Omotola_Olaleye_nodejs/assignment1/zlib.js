// It is used to compress and decompress files

var zlib = require('zlib');
var fs = require('fs');

var zip = zlib.createGzip();
var a = fs.createReadStream('./example2.txt');
var b = fs.createWriteStream('./example2.txt.zip');
a.pipe(zip).pipe(b);