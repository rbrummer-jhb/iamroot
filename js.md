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
* Modern JA Applications
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

### Boolean Logic

Truth Table for **AND**:<br/>
A **AND** B:

|  |  | **A** |  |
|  | **AND** | TRUE | TRUE |
| **B** | TRUE | **TRUE** | FALSE |
|  | FALSE | FALSE | FALSE |

Truth table for **OR**:<br/>
A **OR** B:

|  |  | **A** |  |
|  | **OR** | TRUE | FALSE |
| **B** | TRUE | TRUE | TRUE |
|  | FALSE | TRUE | FALSE |

**NOT** inverts **true/false** values.

### The Switch Statement

```javascript
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure.');
        console.log('Go to coding meetup.');
        break;
    case 'tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples.');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend.');
        break;
    default:
        console.log('Invalid day');
}

// this is the same as the above switch statement
if (day === 'monday') {
    console.log('Plan course structure.');
    console.log('Go to coding meetup.');
}
else if (day === 'tuesday') {
    console.log('Prepare theory videos.');
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples.');
}
else if (day === 'friday') {
    console.log('Record videos');
}
else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend.');
}
else {
    console.log('Invalid day');
}
```

**SIDE NOTE**:
* An **expression** is anything that produces a value.<br/>
> 4 + 7 // this is an expression

* A **statement** is comprised of expressions and end with semicolons `;`.
> const myNum = 4 + 7; // this is a statement

* **Template Literals** can only take expressions.
> console.log(`${50 - 47} is my favourite number.`);

### The Conditional / Ternary Operator

`[condition] ? [expression] : [alternative expression] ;` to use the **Ternary Operator**.
```javascript
const age = 23;
age >= 18 ? console.log('I like to drink wine.') :
console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// This is the above statement uncondensed
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

// template literal
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}.`);
```

| Console Output |
|:-:|
| I like to drink wine. |
| wine |
| wine |
| I like to drink wine. |

### Strict Mode

`'use strict';` to activate **Strict Mode** in JavaScript.<br/>
This **String statement** forbids us from doing certain things and it creates visible errors in the console instead of failing silently if there is something wrong in the code.<br/>
```javascript
'use strict';

let hasDriversLicense = false;
const passTest = true;

// this ReferenceError will not be thrown without strict mode
if (passTest) hasDriveLicense = true;

// these will throw SyntaxError, because strict mode reserves
// some words that might become keywords in the future
const interface = 'Audio';
const private = 47;
```

### Functions

`function [function name]() {}` to **declare** a function.<br/>
*(Don't use reserved keywords for function names.)*
```javascript
function logger() {
    console.log('My name is Watson');
}
// this is calling / running / invoking the function
logger();
```

Functions can **return or receive** data.<br/>
You can **pass parameters/arguments** to a function<br/>
`function [function name]( [param1], [param2] ) {}`

Not all functions need to **return data** or **accept parameters**.<br/>
Functions allow us to create more maintainable code and helps enforce the **D.R.Y** principle *(**D**on't **R**epeat **Y**ourself)*.

```javascript
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
// this captures the result of the function
const appleJuice = fruitProcessor(5, 0);
// this logs the captured result
console.log(appleJuice);
// this simply logs the result of the function
console.log(fruitProcessor(4, 7));
```

| Console Output |
|:-:|
| Juice with 5 apples and 0 oranges. |
| Juice with 4 apples and 7 oranges. |

Function **declarations** can be called before they are defined.<br/>
Function **expressions** can **NOT** be called before they are defined.<br/>
Both function **Declarations** & function **Expressions** have their place.<br/>
It's generally a good practice to have function declarations at the top of the script file.

```javascript
// calling before declaration
console.log(calAge1(1997));
// this is a function declaration
function calAge1(birthYear) {
    return 2077 - birthYear;
}

// this is a function expression
const calAge2 = function (birthYear) {
    return 2077 - birthYear;
}
// calling after declaration
console.log(calAge2(1997));
```

### Arrow Functions

**Arrow Functions** were introduced in ES6 *(ECMAScript6)*, and they can be one liner functions.

```javascript
const calcAge1 = birthYear => 2097 - birthYear;
console.log(calcAge1(1997));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2077 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1997, 'Sherlock'));
console.log(yearsUntilRetirement(1998, 'Watson'));
```

| Console Output |
|:-:|
| Sherlock retires in -15 years. |
| Watson retires in -14 years. |

**Functions calling other functions** *(docstrings/'contracts' included)*.

**Docstrings** are a good practice in any programming language.<br/>
They are used to document your code, especially **functions**.<br/>
You can create a docstring by typing `/**` and then hitting **Enter**.<br/>
Most editors will autocomplete the docstring for you by filling it with the necessary placeholder words.

```javascript
/**
 * Multiplies the parameter (fruit) with 4
 * @param {int} fruit
 * @returns fruit * 4
 */
function cutPieces(fruit) {
    return fruit * 4;
}

/**
 * Calls cutPieces() and then creates a
 * template literal with the parameters
 * @param {int} apples
 * @param {int} oranges
 * @returns juice (Template Literal String)
 */
function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and
    ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
```

Anything **after the return statement** in a function is **ignored**.<br/>
So there are **3 different ways** of writing functions:
* Function Declarations
  ```javascript
  function calcAge(birthYear) {
    return 2037 - birthYear;
  }
  ```
* Function Expressions
  ```javascript
  const calcAge = function (birthYear) {
    return 2037 - birthYear;
  }
  ```
* Arrow Functions
  ```javascript
  const calcAge = birthYear => 2037 - birthYear;
  ```

**Arrays & Objects** are the most important data structures in JavaScript.  
Arrays are zero-based.

```javascript
const friends = ['qui gon jin', 'obi wan kenobi', 'yoda'];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
```

| Console Output |
|:-:|
| ['qui gon jin', 'obi wan kenobi', 'yoda'] |
| qui gon jin |
| 3 |
| yoda |

Any positon of an array simply need to be an expression.
```javascript
const someName = 'Sam Jackson';
const someArray = [1, 2, 3];

const randomThings = [47, 'windu', someName, 4 + 20, someArray];
```

`.push( [expression] )` to add elements to the end of the array.  
`.push()` also returns the length of the array.  
`.unshift( [expression] )` to add elements to the start of the array;  
also returns the length of the array.

```javascript
const friends = ['qui gon jin', 'obi wan kenobi', 'yoda'];
const newLength = friends.push('anakin');
console.log(friends);
console.log(newLength);
```

| Console Output |
|:-:|
| ['qui gon jin', 'obi wan kenobi', 'yoda', 'anakin'] |
| 4 |

`.pop( [expression] )` to remove elements from the end of the array.  
`.pop()` does **not** return the length of the array; it returns the removed element.  
`.shift( [expression] )` to remove the first element of the array;  
also returns the removed element.

```javascript
const friends = ['qui gon jin', 'obi wan kenobi', 'yoda'];
console.log(friends.pop());
console.log(friends);
```

| Console Output |
|:-:|
| 'yoda' |
| ['qui gon jin', 'obi wan kenobi'] |

`.indexOf( [expression ] )` to get the index / position of the element in the array.

```javascript
const friends = ['qui gon jin', 'obi wan kenobi'];
console.log(friends.indexOf('obi wan kenobi'));
```

| Console Output |
|:-:|
| 1 |

`.includes( [expression ] )` also gets the index / position of the element in the array,  
but it also performs type checking.

```javascript
const arr = ['qui gon jin', 'obi wan kenobi', '47', 42];
console.log(arr.indexOf('47'));
console.log(arr.includes(47));
```

| Console Output |
|:-:|
| 2 |
| false |

**Objects** are good for unstructured data.  
You can access the properties of an object using **dot .** or **bracket []** notation.  
You can build expressions with **bracket [] notation**.  
Any function that is attached to an object is called a **method**.  

```javascript
const obj = {
    firstName: 'Michael',
    lastName: 'Scott',
    age: 55 - 10,
    job: 'Regional Manager'
    // this property holds a method
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
};
console.log(obj.firstName);
console.log(['lastName']);
// dot notation
console.log(obj.calcAge(1990));
// bracket notation
console.log(obj['calcAge'](1990));

const nameKey = 'Name';
console.log(obj['first' + nameKey]);
console.log(obj['last' + nameKey]);
```

| Console Output |
|:-:|
| Michael |
| Scott |
| 47 |
| 47 |
| Michael |
| Scott |

`for( [counter]; [condition]; [increment] ) { [instruction] }` to declare a **for loop** control statement.

```javascript
for(let counter = 1; counter <= 10; counter++) {
    console.log(`Dip dip potato chip ${counter}`);
}
```

| Console Output |
|:-:|
| Dip dip potato chip 1 |
| Dip dip potato chip 2 |
| Dip dip potato chip 3 |
| Dip dip potato chip 4 |
| Dip dip potato chip 5 |
| Dip dip potato chip 6 |
| Dip dip potato chip 7 |
| Dip dip potato chip 8 |
| Dip dip potato chip 9 |
| Dip dip potato chip 10 |

Looping through an array.  
`continue` exits the current iteration of the loop and **continues** to the next one.  
`break` terminates the loop.  
```javascript
const arr = [
    'Michael',
    'Scott',
    45,
    'Regional Manager',
    ['Dwight','Kevin','Oscar'] 
];
// continue
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') continue;
    console.log(arr[i], typeof arr[i]);
}
// break
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') break;
    console.log(arr[i], typeof arr[i]);
}
// backwards looping
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
```

| Console Output *(continue)* | Console Output *(break)* | Console Output *(backwards looping)* |
|:-:|:-:|:-:|
| Michael string | Michael string | ["Dwight", "Kevin", "Oscar"] |
| Scott string | Scott string | Regional Manager |
| Regional Manager string |  | 45 |
| ["Dwight", "Kevin", "Oscar"] |  | Scott |
|  |  | Michael |

A loop within a loop:
```javascript
// runs through first iteration
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Starting exercise ${exercise} ---`);
    // runs through all iterations
    for (let rep = 1; rep < 4; rep++) {
        console.log(`Exercise ${exercise} : Lifting weights rep ${rep}`);
    }
}
```

| Console Output |
|:-:|
| --- **Starting exercise 1** --- |
| Exercise 1 : Lifting weights rep 1 |
| Exercise 1 : Lifting weights rep 2 |
| Exercise 1 : Lifting weights rep 3 |
| --- **Starting exercise 2** --- |
| Exercise 2 : Lifting weights rep 1 |
| Exercise 2 : Lifting weights rep 2 |
| Exercise 2 : Lifting weights rep 3 |
| --- **Starting exercise 3** --- |
| Exercise 3 : Lifting weights rep 1 |
| Exercise 3 : Lifting weights rep 2 |
| Exercise 3 : Lifting weights rep 3 |

Looping through an **array of arrays**:

```javascript
const blue = [
    ['I\'m', 'blue'],
    ['da', 'ba', 'dee'],
    ['da', 'ba', 'daa'],
];

for (let i = 0; i < blue.length; i++) {
    // console.log(blue[i]);
    for (let j = 0; j < blue[i].length; j++) {
        console.log(blue[i][j]);
    }
}
```

| Console Output |
|:-:|
| I'm  |
| blue  |
| da  | 
| ba  |
| dee  |
| da  |
| ba  |
| daa  |

`[counter]; while ( [condition] ) { [instruction]; [increment] }`  
to declare a **while loop**.  
A **while loop** doesn't necessarily need a counter.  
It can have a terminating condition.

```javascript
let rep = 1;
while (rep <= 5) {
    console.log(`Lifting weights rep ${rep}`);
    rep++;
}
```

| Console Output |
|:-:|
| Lifting weights rep 1 |
| Lifting weights rep 2 |
| Lifting weights rep 3 |
| Lifting weights rep 4 |
| Lifting weights rep 5 |