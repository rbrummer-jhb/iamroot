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

**Strings**.  
Strings are immutable. Their values  cannot be changed with indexing.  
This will not work:
```python
name = 'Sherlock'
# throws TypeError
name[0] = 'C'
```
You can **concatenate** strings with the `+` *(plus)* operator and even the `*` *(multiplication)* operator:
```python
first_part = 'Hello sunshine,'
last_part = ' the Earth says hello!'
first_part + last_part
>>> 'Hello sunshine, the Earth says hello!'

letter = 'z'
letter * 10
>>> 'zzzzzzzzzz'
```
In Python, `''` *(single quotes)* or `""` *(double quotes)* don't drastically bear significance of the other.  
Just try to be consistent with your choice of them throughout your scripts.
```python
# these are all legal
"1" + "1"
>>> 11
# but this is inconsistent
"1" + '1'
>>> 11

'1' + '1'
>>> 11
```
Just be mindful of apostrophes inside strings. Think **escape sequences**.  
```python
# the string ends at the 'apostrophe' in I'm
'Look, I'm a beautiful butterfly!'
```
```python
# now it is escaped
'Look, I\'m a beautiful butterfly!'
```
```python
# this is conveniently not necessary with double quotes
"Look, I'm a beautiful butterfly!"
```
Strings, like many other built-in modules/'classes' in Python, have many built-in functions/'methods'.  
**Methods** & **functions** are the same, however, if a function belongs to a module/'class'  
it is called a **method**.
```python
s = 'she owl'

# the .upper() method of the string class is invoked
# because 's' is a string
s.upper()
>>> 'SHE OWL'

s.lower()
>>> 'she owl'

# the .split() method 'splits' the string at spaces
'mississippi is legit'.split()
>>> ['mississippi', 'is', 'legit']

# unless a delimiter is specified
'mississippi is legit'.split('i')
>>> ['m', 'ss', 'ss', 'pp', '']
```
You can format strings & the numbers inside them with the `.format()` method,  
```python
print('The {} {} {}'.format('fox', 'brown', 'quick'))
>>> 'The fox brown quick'

# you can index the .format() arguments
print('The {2} {1} {0}'.format('fox', 'brown', 'quick'))
>>> 'The quick brown fox'

# you can also assign variables inside  the .format() arguments
print('The {q} {b} {f}'.format(f='fox', b='brown', q='quick'))
>>> 'The quick brown fox'
```
or with *f* strings:
```python
name = 'Gandalf'
age = 1000
print(f'{name} is {age} years old')
>>> 'Gandalf is 1000 years old'
```

To create a **list** *(known as arrays in some other languages)*:
```python
my_list = [100, 'howdy', 123.45, {'k1':300}]
```
As seen above, list items don't have to conform to one type.  
The above list has an **integer**, a **string**, a **float**, and a **dict**.
```python
print( my_list[0] )
>>> 100

print( my_list[1] )
>>> 'howdy'

print( my_list[2] )
>>> 123.45

print( my_list[3] )
>>> {'k1':300}

print( len(my_list) )
>>> 4
```
**Unlike strings**, you can change the values of the indexes:
```python
my_list[0] = 'dip dip potato chip'

print(my_list)
>>> ['dip dip potato chip', 'howdy', 123.45, {'k1':300}]
```
Use the built-in `.pop()` list method to remove the last element of a list.  
```python
my_list.pop()
```
Specify an index to remove a specific element:
```python
my_list.pop(1)
```
Use the built-in `.append()` list method to add an element to the end of a list.  
```python
my_list.append('last place')
```
You can simply concatenate lists together:
```python
letters = ['a','b','c']
numbers = [1,2,3]
my_list = letters + numbers

print(my_list)
>>> ['a','b','c',1,2,3]
```
The list object has many other methods like `.sort()`, `.reverse()`, etc..

**Dictionaries** are **unordered** mappings for storing objects.  
Dictionaries retrieve objects by key name.  
*(keys should be **strings**)*  
Lists retrieve objects by location *(indexing)*.  

To create a **dict** *(use `{}` curly brackets)*:
```python
my_dict = { 'key1': 'dip', 'key2': 'dip', 'key3': 'potato', 'key4': 'chip' }
# notice the resemblance to a JSON object
# { 
#     'key1': 'dip', 
#     'key2': 'dip', 
#     'key3': 'potato', 
#     'key4': 'chip'
# }
```
The values can be of any type.  
You retrieve the values by indexing with their key names:
```python
print( my_dict['key1'] )
>>> 'dip'
```
You can also assign the keys new values:
```python
my_dict['key4'] = 7
```
The dict object has many other methods like `.keys()` to retrieve the keys,  
`.values()` to retrieve the values, etc.

If you have a list or dict inside another list or dict  
you can still retrieve those values:
```python
# this is a list
ls = [1, 2, [3, 4], {'k1': 56.7}]

print( ls[2], ls[3] )
>>> [3, 4] {'k1': 56.7}

print( ls[2][1] )
>>> 4

print ( ls[3]['k1'] )
>>> 56.7

# this is a dict
d = { 'k1': 1, 'k2': 2, 'k3':{ 'inside_k3': 3 } }

print( d['k3']['inside_k3'] )
>>> 3
```

**Tuples** are also immutable like **strings**.  
```python
# this is a tuple
t = (1, 2, 3)

# this throws a TypeError
t[0] = '1'
```
You can also mix object types like with **lists**.  
```python
t = (1, 2.2, '3')
```
You can also index a tuple.
```python
t = ('1', '2', '3')
print(t[1])
>>> '2'
```
Tuples only have 2 built-in methods.  
`.index()` & `.count()`:
```python
t = ('a', 'b', 'c', 'c')

print( t.index('a') )
>>> 0

print( t.count('c') )
>>> 2
```
**Sets** are unordered collections of unique elements; there can only be one representative of the same object.
```python
# this is a set
s = set()
s.add(1)

print(s)
>>> {1}
```
Notice what happens when you cast a list to a set:
```python
# this is a list
l = [1, 1, 4, 4, 4, 2, 8, 8, 8, 3]

# there can only be 1 unique element in a set
# sets are unordered, but the elements appear ordered when casted
print( set(l) )
>>> [1, 2, 3, 4, 8]
```
**Booleans** convey **true** or **false** statements.  
**True** & **False** must start with an uppercase 'T' & 'F'.  
You can use `None` as a placeholder for a boolean variable:
```python
print( 1 > 2 )
>>> False

print( 's' == 's' )
>>> True
```

## I/O with Files
### Reading, Writing, Appending Modes
* **mode='r'** is read only
* **mode='w'** is write only (will overwrite files or create new!)
* **mode='a'** is append only (will add on to files)
* **mode='r+'** is reading and & writing
* **mode='w+'** is writing & reading (Overwrites existing files or creates a new file!)

To read a file, the tab before the `print()` is important.  
If the file `myfile.txt` does not exist in the same directory as the script is will be created.  
The code below assumes that the file exists and inside it is a line:
```python
with open('myfile.txt', mode='r') as f:
    print(f.read())

>>> 'hello from inside the file'
```
To write to a file:
```python
with open('myfile.txt', mode='w') as f:
    f.write('this is added to the file\'s contents')
```
