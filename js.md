---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

css: js
layout: js
permalink: /js/
---
# Section 1 | Overview & Setup

These notes are based of off this course:
<br/>[https://www.udemy.com/course/the-complete-javascript-course/](https://www.udemy.com/course/the-complete-javascript-course/)

* Fundamentals
* Developer Skills
* DOM Manipulation
* How JavaScript Works
* Modern Operators (ES6+)
* Functions
* Arrays
* Numbers, Dates & Timers
* Advanced DOM
* Object-Oriented JS
* Mapty Project
* Asynchronous JS
* Modern JA Applications
* Forkify Project
* Deployment & Git

Download Visual Studio Code [here](https://code.visualstudio.com/download).

# Section 2 | Fundamentals

You can hit `CTRL + SHIFT + J` (Windows), or `right-click > Inspect` to open the Developer Tools in Chrome to gain access to the console.

You can write **JavaScript** in the console and it will be interpreted after hitting **Enter**.

```javascript
alert("Hello World!")

1 + 2 + 3 + 4 // 10
```

You can navigate through your previous console entries with the **up arrow**.

JavaScript is a **high-level**, **object-oriented**, **multi-paradigm** programming language.
* The **language** is used to give the computer instructions.
* **High-level** : you don't have to worry too much about complexities like memory management.
* **Object-oriented** : based on objects for storing data.
* **Multi-paradigm** : accommodates a variety of programming styles (imperative & declarative programming; the way of structuring code).

In **Web Development** JavaScript is used alongside **HTML** & **CSS** to build web applications.
* **HTML** : Content. *(Nouns)*
* **CSS** : Presentation. *(Adjectives)*
* **JS** : Dynamic effects & Loading data. *(Verbs)*

Some popular **Web Development** JavaScript frameworks & libraries are **React**, **Angular** & **View** *(frontend)*, and **NodeJS** *(backend; web servers)*.

You can also build **Native Mobile Applications** with JavaScript using **React Native**, and <br/>
**Native Desktop Applications** using **Electron**.

Use the `<script> [scripts] </script>` tags to include inline JavaScript into your **HTML** document,<br/>
and they are usually placed at the end of the `<body></body>` tags.

`alert( [string] )` to display a pop up message in the browser.

```html
<script>
    let js = 'bruce wayne';
    if (js === 'bruce wayne') alert('I\'m Batman.');

    console.log(1 + 2 + 3 + 4); // console will return 10
</script>
```

Alternatively, you can specify a source to link to JavaScript files containing scripts <br/>`<script src=" [script filename] "></script>`.<br/>
*(Beware of where your script file is located)*

```html
<script src="script.js"></script>
```

A **value** is a piece of data.<br/>
A **variable** is like a box in your computer's memory, and the **assigned value** is stored inside of that box.

`let [variable name]` to declare a variable.<br/>
`console.log( [expression] )` to log to the browser console.<br/>
`;` semicolons are used to end statements and are a good programming practice.<br/>

```javascript
// "Eminem" is the literal value
console.log("Eminem");

// 42 is the literal value
console.log(42);

let firstName = "Brimstone";
console.log(firstName);
```

| console output |
|:-|
| Eminem |
| 42 |
| Brimstone |

When naming variables it is a good practice to use camel Case : `thisIsCamelCase`<br/>
and to give them descriptive names.<br/>
**Variable names** may contain `_` **underscores**, `123` **numbers**, and `$` **dollar signs**.<br/>
Variable names can however not start with a **number**, or be named with a JavaScript **keyword**.<br/>
Variable names containing all **UPPERCASE** letters are reserved for declaring **constants**.<br/>
**CONSTANTS** are variables whose values will not change.

```javascript
// these variable names are descriptive
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
// these variable names are not descriptive
let j1 = 'programmer';
let j2 = 'teacher';

// this is a CONSTANT
let PI = 3.141;

// these will throw errors

// starts with a number
let 3years = 3;
// uses a keyword as a variable name
let function = 'arigato';
```
