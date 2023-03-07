// This module provides functionality for running JavaScript code in a sandboxed environment. It is used to compile JavaScript code in a virtual machine.

var vm = require('vm');
var myObj = { name: 'Tola', age: 12 };
vm.createContext(myObj);

vm.runInContext('age += 1;', myObj);

console.log(myObj);