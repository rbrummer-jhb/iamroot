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

When creating a request to an API, the `error` parameter is mostly for low-level OS errors such as a lack of internet connectivity, the `response` parameter's body could reflect errors from the API such as a broken query string *(the server cannot access the specific data you need)*:
```js
const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=a372b20350e279caf846d64807aeed91&query=25.8640,28.0889&units=m';

// Weather Stack API
request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else {
        const temperature = response.body.current.temperature;
        const feelslike = response.body.current.feelslike;
        const weatherDescription = response.body.current.weather_descriptions[0];
        
        console.log(`${weatherDescription}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`);
    }
});
```

**Callback**:
```js
const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum);
});
```

**Object property shorthand**.  
If an object has a property with a variable as a value,  
and the property name and the variable name are the same, you can do this instead:  
*(It's just a syntactical improvement)*
```js
const name = 'Andy';
const userAge = 25;

const user = {
    name,
    age: userAge,
    location: 'USA',
}
```

**Object destructuring**.  
You can unpack an object's properties' values into new variables using less code:
```js
const product = {
    label: 'Dracula',
    author: 'Bram Stoker',
    stock: 123,
    price: 200
}

const {label, author, stock, price} = product;
```
If a property does not exist it will be created,  
but it will not have a value:
```js
...
const {label, author, stock, price, rating} = product;
console.log(rating); // undefined
```
You can assign a property value to a new variable:
```js
const {productLabel:label, author, stock, price} = product;
console.log(productLabel); // Dracula
```
You can set a default value for an inline property:
```js
...
const {label, author, stock, price, rating = 5} = product;
console.log(rating); // 5
```
Object destructuring can be applied in a function parameter:
```js
const product = {
    label: 'Dracula',
    author: 'Bram Stoker',
    stock: 123,
    price: 200
}

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product);
```

# Section 7 | Web Servers (Weather App)