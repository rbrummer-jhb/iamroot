---
css: mean
layout: mean
permalink: /mean/
---

# Section 1 | Getting Started

These notes are based of off this course:  
[https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/](https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/)

**M.E.A.N** - 
* **MongoDB**
    * Stores docs in Collections *(database)*
    * Stores App Data
    * Has no Data Schema or Relations
    * Easy Node Integration
* **Express.js**
    * Based on Node; extra functionality
    * Middleware; Funnel Requests
    * Has Routing & View-rendering
    * Simplifies Node *(like Laravel for PHP)*
* **Angular**
    * Renders UI *(without reloading page)*
    * Handles User Input
    * Speaks to Backend Services
* **Node.js**
    * Listens to Requests & Responses
    * Server-side Logic
    * Interacts with Databases & Files
    * *(Alternative to PHP, Ruby Rails, Java)*

Client *(browser; fronted)* uses:
* Angular *(JavaScript)*

Server *(backend)* uses:
* Node
* Express
* Mongo

Client ⟸ Requests & Responses *(AJAX; JSON format)* ⟹ Server

Download [node.js LTS (npm included)](https://nodejs.org/en/download/)  
Download [Visual Studio Code](https://code.visualstudio.com/download)  
* Download & Install **Angular Essentials** from the VS Code Marketplace *(optional)*  

Download [Angular CLI](https://angular.io/cli)  

*(In the terminal / shell / cmd)...*
```sh
npm install -g @angular/cli
```

Create a new Angular project:
```sh
ng new mean-course --no-strict
```
The generated files are mostly for configuration.  
* `package.json` lists the project dependencies *(**npm install** will read this file)*.  
* `angular.json` for the Angular CLI.  
* `/e2e` is for end-to-end testing.  
* `/node_modules` contains the project dependencies.  
* `/src` is where the project resides.
* `/src/app` is where the Angular files reside.

Serve your project locally *(this uses the **HTTP protocol**)* from inside your project directory.
*(Clicking on `index.html` uses the **file protocol**)*
```sh
ng serve
```
Your project should now be running on   `http://localhost:4200`  
that you can navigate to with your browser.

# Section 2 | The Angular Frontend

**Angular Components** (`app.component.ts`) are rendered with custom HTML selectors.
```ts
import { Component } from '@angular/core';

@Component({
  // this defines the custom html tag
  selector: 'app-root',
  // this defines the html file that will be parsed by angular
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';
}
```


```html
<!-- index.html -->
...

<app-root></app-root>

...
```

`app.module.ts` contains all the declarations for the project components.  
```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

`main.ts` is where the code is executed first.
```ts
// main.ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

To create a new component *(with a template, testing & style file)*:
```sh
ng generate component post-create
```

It's a good practice to have all components in their own directories.  
`src/app/components/post-create/post-create.component.ts...` 

You need **import & declare** your component in `app.module.ts` in order for Angular to render it.
```ts
...
import { PostCreateComponent } from './components/post-create/post-create.component';

@NgModule({
    declarations: [
        AppComponent,
        PostsCreateComponent
    ],
    ...
})
...
```
To bind to the **click event** of a button element in the component template *(html)*:
```html
<button (click)="onAddPost()">Save Post</button>
```
Define the method to be bound in the component class *(ts)*:
```ts
export class PostCreateComponent {
    ...

    onAddPost() {
        alert('Post added');
    }

    ...
}
```
Define a variable in your component class and **interpolate** it in the component template:  
```ts
// post-create.component.ts
export class PostCreateComponent {
    newPost = '';
    
    ...

    onAddPost() {
        this.newPost = 'Hello from the class!';
    }

    ...
}
```



```html
<!-- post-create.component.html -->
<button (click)="onAddPost()">Save Post</button>
<p>{{ newPost }}</p>
```

HTML elements in the DOM *(Document Object Model)* and in JavaScript are just JavaScript objects with a couple of properties, events, attributes, etc.  
Angular allows us to **bind** these.

The `<textarea></textarea>` tag has a **value** property.  
Use `[]` brackets to bind the `newPost` variable to it.
```html
<textarea [value]="newPost"></textarea>
```

Use `#` in the HTML tag to create a **custom property/reference** for that tag:
```html
<textarea [value]="newPost" #postInput></textarea>
```


```ts
// post-create.component.ts
export class PostCreateComponent {
    newPost = 'No Content';

    ...

    onAddPost(postInput: HTMLTextAreaElement) {
        this.newPost = postInput.value;
    }
}
```
`()` brackets to **event bind**.  
`[]` brackets to **property & attribute bind**.  
`[()]` 'banana-in-a-box' brackets to **two-way bind** class variables.

To use [Angular Material](https://material.angular.io/) styles:
```sh
ng add @angular/material
```
Angular Material has its own **custom HTML tags & style selectors**.

You can create **Angular models** using an **Interface**; it's like a class; it defines what an object looks like, but it cannot be instantiated. It's more like a contract; it can be used to create your own type.

If Angular detects a form, you can omit two way binding `[(ngModel)]` and instead use `ngModel` as an **attribute** paired with a name property.


```html
<!-- post-create.component.html -->
<input type="text" name="title" ngModel>
```

You can get access to the form object by using a **custom reference**.  
You can also add validators *(required, minlength="", etc)*  


```html
<!-- post-create.component.html -->
<form (submit)="onAddPost(postForm)" #postForm="ngForm">
  ...
    <input type="text" name="title" ngModel minlength="5" required>
```

**Observers subscribe to Observables**.  
Observables establish and manage the subscription.  
There are 3 methods that are called on the observer's side:
* next() 
* error()
* complete()

# Section 3 | Adding NodeJS

**Express** is a JavaScript runtime that runs on a server.  
It's simply a framework that builds up on NodeJS.

`ng serve` actually uses a NodeJS server behind the scenes, but it only provides a development server.

There are **2 ways** of connecting an Angular & NodeJS backend:
* Node Express App that serves the Angular SPA. Handles **requests & responses**.
* 2 Separate Servers:
  * Node Express for business logic, authentication, data storage, etc.
  * Static host that returns the Angular SPA.

A **RESTful API** can be built with a NodeJS Express backend.  
* REST *(**Re**presentational **S**tate **T**ransfer)*:
  * A server-side 'app'.
  * Traditional web apps request and receive HTML pages.
  * A stateless backend *(It doesn't care which API connects to it)*.
  * It exposes **URLs or paths**.
  * **HTTP** *(GET, POST, PUT, DELETE, etc)* is used for the APIs requests *(AJAX; JSON)*.

To run a node file called `server.js` run:
```sh
node server.js
```

**Importing** in NodeJS. `require( [packageName] )`:
```js
const http = require('http');
```

To create a new server instance:  
**req**uest, **res**ponse are the arrow function's arguments.
```js
const server = http.createServer((req, res) => { });
```

To access the **port** number to listen on dynamically use `process.env.PORT`:  
server.listen(process.env.PORT || 3000);

To install and use NodeJS **Express**:
```sh
npm i --save express
```
```js
/* app.js */

const express = require('express');
// This returns an Express app;
// a big chain of middlewares
// applied to incoming requests
const app = express();
```

To export:
```js
// The app is registered on the export object
module.exports = app
```

To import the `app`:
```js
/* server.js */

const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
// This tells Express which port to use.
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
```

To install `nodemon` *(node monitor)* to prevent manual restarting of the server: *(`--save-dev` because it's a development only dependency)*
```sh
npm i --save-dev nodemon
```

**CORS** - Cross-Origin Resource Sharing.  
Allows for communication between ports.

**body-parser** parses bodies of incoming request data.
```sh
npm i --save body-parser
```

# Section 4 | Working with MongoDB 