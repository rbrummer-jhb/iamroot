---
css: ang
layout: ang
permalink: /ang/
---

# Section 1 | Getting Started

These notes are based off of this course:  
[https://www.udemy.com/course/the-complete-guide-to-angular-2/](https://www.udemy.com/course/the-complete-guide-to-angular-2/)

## Overview:

- Components \* Data Binding
- Directives
- Services & Dependency Injection
- Routing
- Observables
- Forms
- Pipes
- HTTP
- Authentication
- Optimizations & NgModules
- Deployment
- Animations & Testing

Angular is a **framework for JavaScript**.  
You can create reactive **Single-Page Apps _(SPAs)_** with it.  
It allows you to render components on a single HTML page _(so no page reloading)_.

The Angular team made a commitment to release a new version of Angular every 6 months.  
This does not majorly change anything about Angular however.

Download NodeJS _(npm included)_:  
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Install Angular _(CLI)_:

```sh
npm install -g @angular/cli@latest
```

More about the Angular CLI _(Command Line Interface)_  
[https://github.com/angular/angular-cli/wiki](https://github.com/angular/angular-cli/wiki)

To create a new Angular project `ng new [ your-project-name ] [ options ]` :

```sh
ng new my-first-app --no-strict
```

To serve your project to `http://localhost:4200` _(navigate to your project directory)_:

```sh
ng serve
```

The `package.json` file contains the list of your project dependencies.

The `[(ngModel)]` **directive** allows for **two-way binding**.

```html
<!-- This binds the value from the text input element to
the 'name' property of this component's template (html)
which is the 'name' variable of this component's class (ts) -->
<input type="text" [(ngModel)]="name" />
```

___
## TypeScript Crash Course Start

**TypeScript** is a superset to JavaScript *(it extends JavaScript)*.  
It offers more features to JavaScript *(strong/static typing)*.  
TypeScript doesn't run in the browser.  
It is compiled into JavaScript by the TypeScript CLI.

To create a `package.json` for dependencies run:
```sh
npm init -y
```

To explicitly install [TypeScript](https://www.typescriptlang.org/) :  
`-g` for global installation, omit this to only install for the current directory.
```sh
npm install typescript
```

After this, the TypeScript compiler can now be invoked like this:
```
npx tsc filename.ts
```

A JavaScript file is then compiled from the TypeScript file.

To create a TypeScript config file:
```sh
npx tsc --init
```
This creates `tsconfig.json`.  
Only change this if you know what you're doing.  
Angular comes with one of these files out of the box.

TypeScript has:
* Primitive types:
    * number, string, boolean, etc
* Complex types:
    * arrays, objects, etc
* Function types, parameters, etc

```ts
let age: number;
age = 21;

let userName: string;
userName = 'Agent J';

let isStrong: boolean;
isStrong = true;

// This defines an array of strings
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

```

**NOTE:** `number` is a type; `Number` is a JavaScript object.

TypeScript has an `any` fallback type if the type is omitted,  
but this essentially takes you back to normal JavaScript.
```ts
// typeless
let person;
// however this defines an object type with a specific structure
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Sherlock',
    age: 32
}

// this defines an array type containing
// objects with a specific structure
// note square brackets at the end
let people: {
    name: string;
    age: number;
} []; 

people = [
    {name: 'Alpha', age: 20},
    {name: 'Bravo', age: 21},
    {name: 'Charlie', age: 22}
];
```

**Type Inference** is when TypeScript infers a type based off of the value.  
```ts
// the type is not specified,
// but infers that it is a string
let someVariable = 'some string';
// this throws an error
someVariable = 1234;

```
**Union Typing** is when you define multiple types.  
You do this with the `|` *(pipe)* character.  
```ts
// this specifies 2 types for the variable
let someVariable: string | number = 'some string';
// this is now legal
someVariable = 1234;
```

You can define your own types with **Type Aliasing**:
```ts
// this defines a type alias
type Person = {
    name: string;
    age: number;
};
let person: Person;
let people: Person[];
```

Functions also have return types:
```ts
// function's return type is inferred to 'number'
function add1(a: number, b: number) {
    return a + b;
};
// function's return type is specified
function add2(a: number, b: number): number {
    return a + b;
};
```

**Generics**  
`<>` angle brackets after the function name specify that  
the function will contain a generic type in its scope.  
Typically it is called 'T'. This can then be used to  
specify that the parameters must be of the same type.  
**Note:**  
`...` to copy an array.  
`.split()` is a string method.
```ts
// parameter types are inferred
function insertAtBeginning1(arr: any[], val: any) {
    const newArr = [val, ...arr];
    return newArr;
};
const demoArr = [1, 2, 3];
// the result is [-1, 1, 2, 3]
const updatedArr = insertAtBeginning1(demoArr, -1);
// this will not throw warnings, but cause a runtime error
updatedArr[0].split('');


// now the parameter types must be the same
function insertAtBeginning2<T>(arr: T[], val: T) {
    const newArr = [val, ...arr];
    return newArr;
};
// now this will throw warnings
// because the types are numbers
// unless demoArr & updatedArr
// contained string values
updatedArr[0].split('');
```

**Classes**  
TypeScript has classes.
Classes have:
* Access Modifiers *(public, private, etc)*
* Constructors
* Properties
* Methods

Specifying **access modifiers** in the class constructor's parameters  
instantiates those parameters as class properties as well.
```ts
// this is shorthand for the code block's
// properties and constructor seen below
    ...

    constructor(
        public first: string,
        public last: string,
        public age: number,
        private courses: string[]
        ) { }
    
    ...
```
**Note:**`.slice()` returns a new array and not the original array.
```ts

class Student {
    // properties
    public firstName: string;
    public lastName: string;
    public age: number;
    private courses: string[];
    // constructor
    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    // method
    enrol(courseName: string) {
        this.courses.push(courseName);
    }
    // method
    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Harry', 'Potter', 12, ['Potions', 'Dark Arts']);
student.enrol('Broomology');
student.listCourses();
```

**Interfaces** are object type definitions.  
**Note:** there's a difference between **type aliases** and **interfaces**.  
Their syntax is very similar:  
`interface [ interfaceName ] { [properties], [methods] }`  
`type [ typeName ] = { [properties] }`

**Type aliases** are implemented by **variables**.  
**Interfaces** can be **implemented** by **classes**.
```ts
interface Human {
    firstName: string;
    age: number;
    greet: () => void;
}

// this object must now abide by
// the definitions of the interface
let watson: Human;
watson = {
    firstName: 'John',
    age: 30,
    greet() {
        console.log('Greetings.');
        
    }
};
// ensures a certain structure for classes
class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Welcome class!');
        
    }
}
```
## TypeScript Crash Course End 
___

To download **Bootstrap** for some prepared styling ('i' is shorthand for `install`):
```sh
npm i --save bootstrap@3
```
You can then add `bootstrap.min.css` to `angular.json/...architect.build.options.styles`.

# Section 2 | The Basics

Angular is good for building SPAs *(Single-Page Applications)*.  
`index.html` is the single page.

Your `app.component.ts` *(class)* has a `selector` property in its `@Component` decorator.  
The value of this property is the custom HTML element tag that you can use  
to render its `app.component.html` *(template)* in `index.html`.
```ts
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
```

```html
<!-- app.component.html -->
<h3>Hello from AppComponent</h3>
```

```html
<!-- index.html -->
<app-root></app-root>
```

However, `main.ts` is the code that is executed first.  
`AppModule (app.module.ts)` is passed as an argument here.
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
`AppComponent (app.component.ts)` is then passed to `AppModule (app.module.ts)`  
as an argument to its `bootstrap` property as an array, value inside its `@NgModule` decorator.
```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
**Shorthand:**  
`index.html` ⟸ `main.ts` ⟸ `AppModule (app.module.ts)` ⟸ `AppComponent (app.component.ts)` ⟸ `app.component.html` ⟸ `app.component.css`

However, **'AppComponent'** is special; it is the **root** component.  
All the other created components will be added to this component,  
and they need to be imported into `AppModule (app.module.ts)`,  
declared in the `declarations` property's array.

Each of your components can be rendered on a single HTML page using this process.

To create a new component with the Angular CLI:
```sh
ng generate component component-name
# shorthand:
ng g c component-name
```
This creates a new component:
* class *(.ts)*
* template *(.html)*
* style *(.css)*
* test *(.spec.ts)*

You can turn your component's **selector** *(element tag)* into an attribute or class instead by enclosing it with `[]` square brackets or prefixing it with `.` a dot.  
You **cannot**, however, make the select an id or pseudo-class.
```ts
// name.component.ts
...
// as an element
selector: 'app-name'
as an attribute/
selector: '[app-name]'
// as a class
selector: '.app-name'
...
```
Now it must be an attribute or class of an element in order to be rendered.
```html
<!-- app.component.html -->

<!-- as an element -->
<app-name></app-name>
<!-- as an attribute -->
<div app-name></div>
<!-- as a class -->
<div class="app-name"></div>
```

**Data Binding** is communication between the TypeScript code *(business logic)* and the template *(HTML)*

To bind the default 'disabled' HTML attribute to a component property or method:  
**Note: Attribute Binding** uses `[]` square brackets:
```html
<!-- name.component.html -->

<!-- bound to a property -->
<button [disabled]="allowButtonPress"></button>
<!-- bound to a method -->
<button [disabled]="allowButton()"></button>
```

```ts
// name.component.ts
...
allowButtonPress = false;
// OR
allowButton() {
    return this.allowButtonPress;
}
...
```

To bind the 'click' event to a component property or method:  
**Note: Event Binding** uses `()` round  brackets:
```html
<!-- name.component.html -->
<button (click)="onButtonPress()"></button>
<p>{{ buttonStatus }}</p>
```

```ts
// name.component.ts
...
buttonStatus = 'Button not pressed!';

onButtonPress() {
    this.buttonStatus = 'Button pressed!';
}
...
```

You can fetch the event object from the DOM by passing `$event` to a method:
```html
<!-- name.component.html -->
<input type="text" (input)="getEventData($event)">
<p>{{ eventDataTargetValue }}</p>
```

```ts
// name.component.ts
eventDataTargetValue = '';

getEventData(event: any) {
    this.eventDataTargetValue = event.target.value;
}
```

`[()]` *banana-in-a-box brackets* allow for 2 way data binding.  
The value from the DOM and the corresponding class property changes concurrently. 

**Directives** are instructions for the DOM.  
The `*ngIf` **structural directive** can be used to check a boolean status of a property or variable.  
**Structural Directives** are often prefixed with `*` asterisk.  
**Attribute Directives** often look like attributes.

`ngStyle` is an **attribute directive** that can be used to dynamically style elements. It expects CSS styling in a **json**:
```html
<!-- name.component.html -->
<p [ngStyle]="{background: getColor()}"></p>
```

```ts
// name.component.ts
...
serverStatus = 'offline';
...
getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
}
```

`ngClass` is a **class directive** that can be used to dynamically style element classes. It expects TypeScript logic *(the first argument is a class name, enclose with `''` single quotes if it contains `-` dashes, or use camelCase)*:
```html
<!-- name.component.html -->
<p [ngClass]="{online: serverStatus === 'online'}"></p>
```

```ts
// name.component.ts
...
styles: [`
        .online {
            color: white;
        }
    `]
...
serverStatus = 'online';
...
```

A **Model** should just be a blueprint for created objects, and a **TypeScript** class can achieve this.
```ts
// recipe.model.ts

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
```

**Property & Event Binding**
* HTML Elements:
    * Native Properties & Events
* Directives:
    * Custom Properties & Events
* Components:
    * Custom Properties & Events

You can give bound properties aliases with the `@Input()` decorator by passing the name as an argument.
```ts
// name.component.ts

...
@Input('srvElement') element: {type: string, name: string, content: string};
...
```
```html
<!-- name.component.html -->

<app-server-element *ngFor="let serverElement of serverElements" [srvElement]="serverElement"></app-server-element>
```
You can create your own events by using the `EventEmitter` module.  
You then need to use the `@Output()` decorator to be able to emit your events to the parent component.  
You also need methods that will call the `emit()` method.
```ts
// name.component.ts

yourEventName = new EventEmitter<{propertyNameToEmit: string}>();
```

You can add a **reference** to any HTML element, and it will contain all the data for that element.  
You can only declare references inside the HTML code *(the template)*, **NOT** in the TypeScript code.
```html
<!-- name.component.html -->

<input type="text" class="form-control" #serverNameInput>
<button class="btn btn-primary" (click)="onAddServer(serverNameInput)">Add Server</button>
```

You can overwrite a component's 'global' styles and give it its own styles with the `encapsulation` property in the component decorator.
```ts
@Component({
    ...
    encapsulation: ViewEncapsulation.ShadowDom
})
```

You can project content into a component using `<ng-content></ng-content>` between the component's custom element tags.
```html
<!-- parent.component.html -->

<app-child-component>
    <p>Some other content</p>
</app-child-component>
```
```html
<!-- child.component.html -->

<ng-content></ng-content>
```

### Lifecycle Hooks
|  |  |
|:-|:-|
| `ngOnChanges` | Called after a bound input property changes |
| `ngOnInit` | Called once the component is initialized |
| `ngDoCheck` | Called during every change detection run |
| `ngAfterContentInit` | Called after content *(ng-content)* has been projected into view |
| `ngAfterContentChecked` | Called every time the projected content has been checked |
| `ngAfterViewInit` | Called after the component's view *(an child views)* has been initialized |
| `ngAfterViewChecked` | Called every time the view *(and child views)* have been checked |
| `ngOnDestroy` | Called once the component is about to be destroyed |

A **Dependency** is something a class will depend on if it needs to call a method from another class.

**Hierarchical Injector**
|  |  |
|:-|:-|
| `AppModule` | Same instance of Service is available **Application-wide** |
| `AppComponent` | Same instance of Service is available for **all Components** (but **not for other Services**) |
| Any other Component | Same instance of Service available for **the Component and all its child components** |
