// This module is used for working with the file system on your computer. It allows you to read, write, and manipulate files and directories.
var fs = require('fs');
fs.readFile('example.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
