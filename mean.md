---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

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

**Angular Components** (`app.component.ts`) are rendered with custom HTML selectors.
```html
<app-root></app-root>
```