// The Util module provides access to some utility functions. This module provides utility functions for working with objects and functions

var util = require('util');
var txt = 'Hello, it is my birthday on !';
var result = util.format(txt, 'March', 6);

console.log(result);