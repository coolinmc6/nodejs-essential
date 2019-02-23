var path = require("path");

// console.log("Hello World");
// global.console.log("Hello world");

// var hello = "Hello world from Node.js";

// console.log(hello)          // "Hello world from Node.js"
// console.log(global.hello)   // undefined

// console.log('Directory: ' + __dirname)

// console.log('Filename: ' + __filename)

console.log("Hello from " + path.basename(__filename));