// The Timers module provides a way scheduling functions to be called later at a given time. 
// The Timer object is a global object in Node.js, and it is not necessary to import it using the require keyword.

var myInt = setInterval(function () {
    console.log("Mi llama se Tola");
}, 200);