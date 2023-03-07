// It is used to access information about V8 (the JavaScript engine)

const v8 = require('v8');

// get the heap statistics
console.log(v8.getHeapStatistics());
