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

## TypeScript Crash Course Start
___
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
// note square brackers at the end
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