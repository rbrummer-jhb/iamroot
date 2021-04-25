---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

css: js
layout: js
permalink: /js/
---
## Section 1 | Overview & Setup

These notes are based of off this course:
<br/>[https://www.udemy.com/course/the-complete-javascript-course/](https://www.udemy.com/course/the-complete-javascript-course/)
>
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
* Modern JS Applications
* Forkify Project
* Deployment & Git

Download Visual Studio Code [here](https://code.visualstudio.com/download).

## Section 2 | Fundamentals

You can hit `CTRL + SHIFT + J` (Windows), or `right-click > Inspect` to open the Developer Tools in Chrome to gain access to the console.

You can write **JavaScript** in the console and it will be interpreted after hitting **Enter**.

```javascript
alert("Hello World!")

1 + 2 + 3 + 4 // 10
```

You can navigate through your previous console entries with the **up arrow**.
>
JavaScript is a **high-level**, **object-oriented**, **multi-paradigm** programming language.
* The **language** is used to give the computer instructions.
* **High-level** : you don't have to worry too much about complexities like memory management.
* **Object-oriented** : based on objects for storing data.
* **Multi-paradigm** : accommodates a variety of programming styles (imperative & declarative programming; the way of structuring code).

In **Web Development** JavaScript is used alongside **HTML** & **CSS** to build web applications.
>
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

A **VALUE** can either be an **OBJECT** or a **PRIMITIVE**.<br/>
There are **7 Primitive Data Types**:
>
1. Number *(always floating points; decimals & integers)*<br/>
`let age = 23;`
2. String *(used for text; double or single quotes)*<br/>
`let firstName = 'Hanzo';`
3. Boolean *(logical type; true of false)*<br/>
`let isOfAge = true;`
4. Undefined *(does not have an assigned value)* <br/>
`let shenanigans;`
5. Null *(also means 'empty value' in some circumstances)*
6. Symbol (ES2015) *(defines a value that is unique & immutable)*
7. Bigint (ES2020) *(for integers that are too large for the number type)*

**Comments** are good for documenting code and are ignored by JavaScript.
```javascript
// single line comment

/*
multi-line comment
*/

// wubba lubba dub dub
let aCoolShow = 'Rick & Morty';
```

JavaScript has **Dynamic Typing**; you don't have to specify the data type of the variable's value.<br/>
The **value** has a type NOT the **variable**.

`typeof` to get the value's data type.

```javascript
let isStrong = true; // boolean value
/*
'let' keyword is omitted,
because we are reassigning
a value to the same variable,
or mutating the variable
*/
isStrong = 'YES!'; // string value; dynamically type casted

console.log(typeof 47);
console.log(typeof isStrong);
isStrong = false;
console.log(typeof isStrong);
```

| Console Output |
|:-|
| number |
| string |
| boolean |

**Undefined** is different from other data types; the **variable & value** can be **undefined**.

```javascript
let year; // empty variable
console.log(year);
console.log(typeof year);
```

| Console Output |
|:-|
| undefined |
| undefined |

Using `const` is a good practice for declaring variables.<br/>
Use `let` if you are sure the variable's value will change.<br/>
`var` is the old way of declaring variables; avoid this.<br/>
Omitting these declaration keywords causes JavaScript to create a property on the global object.

```javascript
let age = 30;
age = 31; // age mutated

const birthYear = 1990;
birthYear = 1991; // throws TypeError; immutable

var job = 'programmer'; // old declaration style; avoid
job = 'teacher'; // job mutated

lastName = 'Schwarzeneggar'; // declaration keyword omitted
console.log(lastName); // still legal
```

| Console Output |
|:-|
| Schwarzeneggar |

Basic operators for **Arithmetic**, **Concatenation** & **Assignment** and their **Precedence**.<br/>
`x > y` x greater than y.<br/>
`x >= y` x greater than or equal to y.<br/>
`x < y` x less than y.<br/>
`x <= y` x less than or equal to y.<br/>
`x ** y` x to the power of y.<br/>

```javascript
// arithmetic operators
const now = 2077;
const ageGandalf = now - 1011;
const ageGaladriel = now - 420;
console.log(ageGandalf, ageGaladriel);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageGandalf * 2, ageGandalf / 10, 2 ** 3);

const firstName = 'greatest';
const lastName = 'ever';
console.log(firstName + ' ' + lastName);

// assignment operators
// arithmetic takes precedence over assignment
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// comparison operators
console.log(ageGandalf > ageGaladriel);
console.log(ageGaladriel >= 18);

const isFullAge = ageGaladriel >= 18;

// arithmetic takes precedence over comparison
console.log(now - 1991 > now - 2018);
```

| Console Output |
|:-|
| 1066 1657 |
| 2132 106.6 8 |
| greatest ever |
| 100 |
| false |
| true |
| true |

### Strings & Template Literals

JavaScript has **Type Coercion** which will convert value types. *(See below)*:

```javascript
const firstName = 'Bane';
const job = 'villain';
const birthYear = 1977;
const year = 2077;
const bane = "I'm " + firstName +
", a " + (year - birthYear) +
" year old " + job + "!";
```

**Template Literals (ES2015)** can assemble multiple pieces into a string with **`` backticks**
and this notation for variables `${ variableName }`.

```javascript
const bane2 = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

// inserting newlines with single quotes
console.log('String with \n\
multiple \n\
lines');

// inserting mewlines with backticks
console.log(`String with
multiple
lines`);
```

### Conditionals

`if()` to declare a **Control Structure** or condition.

```javascript
const age = 15;

if (age >= 18) {
    console.log('Sherlock can start his driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sherlock is too young. Wait another ${yearsLeft} years`);
}
```

### Type Conversion & Coercion

Type **Conversion** is explicit **conversion/casting** of types *(manual)*.<br/>
Type **Coercion** is implicit **conversion/casting** of types *(automatic)*.
JavaScript will try to convert different value types beside an operator to the same type.<br/>
`Number( [expression] )` to cast to a number type.<br/>
`String( [expression] )` to cast to a string type.<br/>
You cannot convert to **undefined** or **null**.

```javascript
const inputYear = '1991';

console.log(Number(inputYear), inputYear); // 1991 "1991"
console.log(Number(inputYear) + 18) // 2009

// this will return NaN (Not a Number)
// which means an invalid number
console.log(Number('string'));

// oddly the type of NaN is number
console.log(typeof(NaN));

console.log(String(23), 23); // "23" 23

// this invokes type coercion
console.log("I am " + 23 + " years old");

// this will convert to numbers and return the result
console.log('23' - '10' - 3); // 10

// this will simply concatenate the numbers because
// the + operator has another function with strings
console.log('23' + '10' + 3); // 23103

console.log('23' / '2'); // 11.5
console.log('23' > '10'); // true

let n = '1' + 1;
n = n - 1;
console.log(n); // 10

```

### Truthy & Falsy Values

There are **5 Falsy Values** in JavaScript. These are values that will become **false** when converted to a **boolean**.

1. 0
2. '' (empty string)
3. Null
4. NaN (Not a Number)
5. undefined

```javascript
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('String')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0;
if (money) {
    console.log("Don't spend it all.");
} else {
    console.log("You should get a job!");
}

let height; // undefined
if (height) {
    console.log("height is defined");
} else {
    console.log("height is undefined");
}
```
