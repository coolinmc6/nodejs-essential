# NodeJS Essential Training

# Table of Contents

 - 1. What is Node.js
 - 2. Installing Node.js
 - 3. Node Core
 - 4. Node Modules
 - 5. The File System
 - 6. The HTTP Module
 - 7. Node Package Manager
 - 8. Web Servers
 - 9. WebSockets
 - 10. Testing and Debugging
 - 11. Automation and Deployment
 - 12. Conclusion

# 1. What is Node.js

# 2. Installing Node.js

# 3. Node Core

## The Global Object

- These are the Global Objects in Node: [NodeJS Globals](https://nodejs.org/api/globals.html)
- Instead of `window` like in a browser, in NodeJS, we have the `global` object
- You can log to your terminal with both `console.log()` and `global.console.log()`
- When you create a variable, it isn't added to the `global` namespace like it would be with the `window` object:

```js
var hello = "Hello world from Node.js";

console.log(hello)          // "Hello world from Node.js"
console.log(global.hello)   // undefined
```

- With NodeJS, you automatically get the `path` package but you must require it to use it. You can then use it like below:

```js
var path = require("path");

console.log("Hello from " + path.basename(__filename)); // global.js
```


# 4. Node Modules

# 5. The File System

# 6. The HTTP Module

# 7. Node Package Manager

# 8. Web Servers

# 9. WebSockets

# 10. Testing and Debugging

# 11. Automation and Deployment

# 12. Conclusion