---
css: 
layout:
permalink:
---

# Section 1 | Welcome

These notes are based off of this course:  
[https://www.udemy.com/course/the-complete-nodejs-developer-course-2/](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/)

**Overview:**
* Note taking app *(part 1)*:
    * App creation
    * Basic features
    * Run the app
    * Read & write from file system
    * Third-party node libraries
* Weather app *(part 2)*:
    * Web app
    * Web server creation
    * Build node APIs
    * Launch app the 'prod' server
    * Third-party 'service' *(API)*
* Task manager app *(part 3)*:
    * Setup authentication *(email & password)*
    * Setup database & -storage *(MongoDB; mongoose library)*
    * File uploads, email sending, etc
* Chat app *(part 4)*:
    * SocketIO & web sockets

# Section 2 | Installing & Exploring Node.js

Download & Install Node.js *(LTS; npm included)*:  
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
"**npm** is the largest ecosystem of open source libraries in the world":  
[https://www.npmjs.com/](https://www.npmjs.com/)  
To check your Node.js and npm version run this in your terminal:
```sh
node -v
npm -v
```

Download & Install Visual Studio Code:  
[https://code.visualstudio.com/download](https://code.visualstudio.com/download):

Node passes scripts to Chrome's V8 engine *(written in C++)*  
JavaScript runs C++ code  behind the scenes.

To run the Node REPL *(**R**un **E**xecute **P**rint **L**oop)* in your terminal:
```sh
node
```
To run a JavScript file with Node:
```sh
node filename.js
```

These Node commands are similar to these Chrome runtime commands:
* `global` | `window`
* `process` | `document`

Node can teach JavaScript new things by providing C++ bindings to V8.  
This allows JavaScript to do a lot of things that C++ can do.  
*(C++ can access the file system; now JavaScript can access the file system through Node.)*

 Node uses an event-driven, non-blocking I/O model  
*(it can do other things while waiting for a response; this comes initially from the browser)*.  
 If your app needs to communicate with the machine its running on 
  *(reading & writing files)*,  
 or if it needs to communicate with another server  
 *(querying databases for records)*,  
  **that's I/O.**

# Section 3 | Node.js Module System (Notes App)

Module System:
* Load core Node modules *(installation included)*
* Load third-party modules *(other developers)*
* Load your own created modules

**'File System'** module.  
`require( 'moduleName' )` to import a module.  
To import & assign the File System module:
```js
const fs = require('fs');
```

The file system module & JSON.
The `.readFileSync()` method returns a **buffer**, not a string.  
It is way for Node to represent binary data.  
Use `.toString()` to convert it to a string.  
You can then use `JSON.parse()` to read the string as a JSON object.

To export a module for outside use:
```js
module.exports = ...
```

To create a npm configuration file run:
```sh
npm init
```
npm will ask you a couple of configuration questions.  
To create a default configuration file, hit enter for all,  
or run the command with the `--yes` or `-y` *(shorthand)* option/flag:
```sh
npm init -y
# OR
npm init --yes
```
The created config file is a JSON file: `package.json`.  
This file manages all of the dependencies that our project/app needs to run.

To install more packages/dependencies run:  
*(Add the `-g` flag to install the package globally)*.  
*(append `@x.x.x` to the package name to install a specific version).*  
```sh
npm install packageName@1.0.0
# OR shorthand
npm i packageName@1.0.0
# install globally
npm i -g packageName@1.0.0
```
Globally installed packages are not added to node_modules or package.json. They are installed onto the Operating System.

A new `node_modules` directory will be created and the new package will be added to it and also list in `package.json`.  
`package-lock.json` contains more information about packages/dependencies.  
It makes  npm a bit faster & secure.  
*(**Do not manually edit the node_modules directory or package-lock.json**)*  
You can recreate the `node_modules` directory from `package.json` & `package-lock.json` by running:
```sh
npm install
# OR shorthand
npm i
```

To install the **nodemon** *(ode monitoring)* package which will restart your script automatically after changes:
```sh
npm i -g nodemon
# then run
nodemon filename.js
```

The `node_modules` directory can get very large which makes it difficult to share or upload. So it's considered a good convention to delete it and then reinstall it on the other end.

# Section 4 | File System & Command Line Args (Notes App)

Getting input from a user.  
`process.argv` always provides 2 strings:
* the path to the node.exe on your machine
* the path to the file that was run
* and then any argument values that were provided on the command line.

You can grab these values by indexing.
```js
console.log(process.argv[2]);
```

`yargs` is a useful npm package for parsing command line arguments.
```sh
npm i yargs
```

Arrow Functions are not well suited as methods.  
They don't bind their own `this` value.

# Section 5 | Debugging Node.js (Notes App)

The most basic debugging tool is probably `console.log()`.  
You can have a `debugger;` statement in your code and then run:
```sh
node inspect app.js
# OR
node --inspect-brk app.js
```
to debug your code.

You can also go to `chrome://inspect` in your browser to debug your code with the Chrome dev tools.

# Section 6 | Asynchronous Node.js (Weather App)

**Asynchronous Basics**  
In a **synchronous** programming model, 1 line runs after the next regardless of how long each line takes to execute. 

In Node the **main anonymous function** is pushed onto the Call Stack first,  
and then following functions that are called are pushed on to the Call Stack.  
When a function finishes by running to the end or returns a value,  
it gets removed from the Call Stack, and then the main function is popped off the Call Stack last. Observe:
```js
const listLocations = (locations) => {
    locations.forEach(location) => {
        console.log(location);
    }
};

const myLocations = ['Philly', 'NYC'];

listLocations(myLocations);
```

This is **synchronous**:

| Call Stack | Then |
|:-|:-|
| `console.log('Philly')` | `console.log('NYC')` |
| `anonymous('Philly')` | `anonymous('NYC')` |
| `forEach(...)` | `forEach(...)` |
| `listLocations([...])` | `listLocations([...])` |
| `main()` | `main()` |

The `console.log('Philly')` function will finish and get popped off the stack.  
Then the `anonymous('Philly')` function will finish and get popped off the stack.  
Then the `forEach(...)` function will run again for `'NYC'` and get popped off.  
Then the `listLocations([...])` function will get popped off,  
and then the `main()` function.

This is **asynchronous**:

```js
console.log('Starting');

setTimeout(() => {
    console.log('2 Second Timer');
}, 2000);

setTimeout(() => {
    console.log('0 Second Timer');
}, 0);

console.log('Stopping');
```

The `main()` function is pushed onto the stack.  
Then the `setTimeout()` functions are called and pushed onto the stack,  
but get popped and registered as events in the **Node APIs** waiting to complete.  
When the `setTimeout()` functions complete, they are added to the **Callback Queue**.  
`main()` continues to run and other function calls are carried out.  
When `main()` has run and the **Call Stack** is empty  
 the events in the **Callback Queue** are 'called back' to the **Call Stack**.

> **Call Stack** ⟹ **Node APIs** ⟹ **Callback Queue** ⟹ **Call Stack**

**Weather Stack API**:  
An API key is used for authentication when making requests to an API.  
To get the current weather from this API:
```http
https://api.weatherstack.com/current
```
Setup a query string with a `?` question mark and add key:value pairs separated with an `&` ampersand:
```http
http://api.weatherstack.com/current?key=value&name=andy
```
You need to provide the API key and the location *(long & lat)* for the weather.  
```http
http://api.weatherstack.com/current?access_key=a372b20350e279caf846d60748eead19&query=37.8267,-122.4233
```
