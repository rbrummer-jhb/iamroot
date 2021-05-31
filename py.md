---
css: py
layout: py
permalink: /py/
---

# Section 1 | Course Overview

These notes are based off of this course:  
[https://www.udemy.com/course/complete-python-bootcamp/](https://www.udemy.com/course/complete-python-bootcamp/)

Python was designed to be clear & logical.  
It optimizes developer time.

Python Docs:  
[https://docs.python.org/3/](https://docs.python.org/3/)

Python is popular with **Data Science & Machine Learning**.  
You can also use **Flask & Django** to develop websites with Python.

# Section 2 | Python Setup

Open your Linux terminal or [Git Bash](https://gitforwindows.org/) for Windows.  
Here are some basic Linux commands:

- `pwd` to **'print working directory'**.
- `ls` to **'list'** the items in your current directory.
- `cd` to **'change directory'**.
- `cd ..` to change to a previous directory.
- `.` represents the current directory.
- `clear` to **'clear'** your command line.

**Anaconda** will install Python, a Development Environment _(Jupyter Notebooks)_ and a Navigator Tool.

Download & Install Anaconda:  
[https://www.anaconda.com/products/individual](https://www.anaconda.com/products/individual)

You can open Anaconda by searching for it in **Windows Start**.  

The Anaconda application has a **Home** tab,  
where you will see all available development environments.

>The Anaconda application has an **Environments** tab,  
>these are **virtual environments** for installing libraries.

We will use the **Jupyter Notebook** development environment.  
Launching it will open it in your browser *(preferably Chrome)*.  
Here you can see all your directories and also create new **notebooks**.

A Jupyter Notebook is a environment with individual cells where you can write Python code.  
`Cell > Run Cell` to execute the code in the cell.  
`Shift + Enter` runs the cell code and creates a new cell.  
`Help > User Interface Tour` to get a tour of the UI.

Jupyter Notebook files end `.jpynb`.

You need to `Shutdown` a Jupyter Notebook before deleting it.

`print( [expression] )` to print to the command line.
```python
print('hello world')
>>> hello world
```

Jupyter Notebooks support Markdown.

Basic Python data types:
| Name | Type | Description |
|:-|:-|:-|
| Integers | `int` | Whole numbers *(3, 300, 200)* |
| Floating `Point` | float | Deciaml Numbers *(2.3, 4.6, 100.0)* |
| Strings | `str` | Ordered sequence of characters *("hello", "Sammy", "2000")* |
| Dictionaries | `dict` | Unordered key:value pairs *{"myKey": "value", "name": "Frank"}* |
| Tuples | `tup` | Ordered **immutable** sequence of objects *(10, "hello", 200.3)* |
| Sets | `set` | Unordered collection of unique objects *("a", "b")* |
| Booleans | `bool` | Logical value indicating **True** of **False** |

**Python 3** performs true division by default.
```python
>>> 1/2
>>> 0.5
```

Variable names cannot start with a number, have spaces, contain special symbols, or be **Python reserved keywords**.

According to [PEP](https://www.python.org/dev/peps/pep-0001/#:~:text=PEP%20stands%20for%20Python%20Enhancement,a%20rationale%20for%20the%20feature.)8 *(**P**ython **E**nhancement **P**roposal)* it's good practice to keep variable names lowercase.

Python has **dynamic typing**.  
*(It changes variable types behind the scenes automatically based on the assigned value)*
```python
# this reassignment is legal in Python
x = 7
x = 'seven'
```

You can use the `type()` built-in method to check the types of variables.

String slicing: `[ start index : stop index : step ]`.  
**(Spaces also count as indexes.)**
```python
somestring = 'TROYBOI'

print(somestring[0])
>>> 'T'

print(somestring[-1])
>>> 'I'

print(somestring[0:])
>>> 'TROYBOI'

print(somestring[0:4])
>>> 'TROY'

print(somestring[0:6:2])
>>> 'TOB'
```