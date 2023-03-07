// The Events module provides a way of working with events. In Node.js, all events are an instance of the EventEmitter object

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('rave', function() {
console.log('A rave is happening!');
});
eventEmitter.emit('rave');