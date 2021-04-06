---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
## Section 1 | Download & Installation Guide:

1. Go to [https://www.microsoft.com/en-us/sql-server/sql-server-downloads](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
	* Select **Downloads** >
	* Under 'Developer' select **Download Now** >
<br/><br/>

2. Run the .exe
	* Select **Custom** >
	* Choose MEDIA LOCATION `C:\SQL2019` >
	* **Install** >
<br/><br/>

3. Launch Microsoft SQL Server Installation Centre *(you can close the .exe now)*
	* Select **Installation** on the side bar >
	* Select **New SQL Server stand-alone installation or add features to an existing installation** >
<br/><br/>

4. Product Key
	* **Specify a free edition:** >
	* Select **Developer** >
	* **Next** >
<br/><br/>

5. License Terms
	* Tick **I accept the license terms and Privacy Statement** >
	* **Next** >
<br/><br/>

6. Install Rules
	* It will carry our setup processes
	* **Next** >
<br/><br/>

7. Feature Selection
	* >✓ **Database Engine Services**
	* 	**Next** >
<br/><br/>

8. Instance Configuration
	* Select **Default instance** >
	* **Next** >
<br/><br/>

9. Server Configuration
	* **Next** >
<br/><br/>

10. Database Engine Configuration
	* Select **Windows authentication mode** >
	* Select **Add Current User** >
	* **Next** >
<br/><br/>

11. Ready to Install
	* **Install** >
	* When it's done select **Close** >
<br/><br/>

12. Launch Microsoft SQL Server Installation Centre
	* Select **Installation** on the side bar >
	* Select **Install SQL Server Management Tools** >
	* **Download SQL Server Management Tools (SSMS)** >
<br/><br/>

13. Run the .exe
	* **Install** >
	* When it's done select **Close** >
<br/><br/>

14. Launch Microsoft SQL Server Management Studio
	* Enter **.** (dot) as 'Server name' >
	* **Connect** >
<br/><br/>

15. Launch Azure Data Studio
	* Select **New Connection** >
	* Enter **.** (dot) for 'Server' >
	* **Connect** >
<br/><br/>

You can close all open windows now.
<br/>
You'll now be launching **Microsoft SQL Server Management Studio**
<br/>
and connecting manually to write SQL code.

## Section 2 & 3 | Some Basic Keywords & Statements
**Database** : a container of tables, queries and functions as well as a holder of security.
<br/>
Every query is run in the context of the database.

This is needed on every single query; equivalent to `print` in other languages.
<br/>
Uppercase **keywords** are optional, but try to remain consistent in your chosen style.
*(See below.)*
```sql
SELECT
OR
select
```
This names the columns.
```sql
AS
```
`;` semicolons are the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call to the server.

[GO](https://docs.microsoft.com/en-us/sql/t-sql/language-elements/sql-server-utilities-statements-go?view=sql-server-ver15) signals the end of a batch of Transact-SQL statements to the SQL Server utilities.
```sql
GO
```
**dbo** under Tables → database owner.

This creates a new table.
```sql
CREATE TABLE tableName;
```
*(This only appears to work if you specify a column as well. See the line below)*
<br/>
Format: `( [name] [data type] )` creates a new column.
*(Columns will also be referred to as fields).*
```sql
( scores int );
```
This inserts values into the column.
```sql
INSERT INTO columnName VALUES (1), (2), (3);
OR
INSERT INTO
columnName
VALUES (1), (2), (3);
```
White space is ignored.

**\*** (asterisk) also known mostly commonly as the shorthand for **ALL**. *(See below)*
<br/>
This will retrieve all values from the column.
```sql
SELECT * FROM columnName;
```
This deletes the contents of the table's columns.
```sql
DELETE FROM tableName;
OR
TRUNCATE TABLE tableName;
```
This deletes the table.
```sql
DROP TABLE tableName;
```
## Section 4 | Some Data Types & Declarations
This specifies the database context for queries.
```sql
USE databaseName;
```
To declare a variable and intialise it; all variables must start with the `@` sign.
<br/>
Format `DECLARE [@variableName] AS [data type] = [value]`. *(See below.)*
```sql
DECLARE @variableName AS INT = 0;
```
This assigns a variable a new value.
```sql
SET @variableName = 1;
```
`--` To add comments, also note comment buttons on the **SSMS** toolbar.
<br/>
Comments are useful for documenting code.
```sql
-- this selects all from the scores column
SELECT * FROM scores;

-- these are comments
-- the early bird catches the worm
-- the second mouse gets the cheese
```
**Some data types** and their respective **max values, min values** and **memory sizes**.
<br/>
Assigning a value that is too large or too small for a given
<br/>
data type will cause a **Arithmetic Overflow Error**
```sql
-- 8 bytes in memory
BIGINT ↓
-2^63 (-9,223,372,036,854,775,808) to 2^63-1 (9,223,372,036,854,775,807)

-- 4 Bytes in memory
INT ↓
-2^31 (-2,147,483,648) to 2^31-1 (2,147,483,647)

-- 2 Bytes in memory
SMALLINT ↓
-2^15 (-32,768) to 2^15-1 (32,767)

-- 1 Byte in memory
TINYINT ↓
0 to 255 : (does not allow negative numbers excluding 0)
```
To declare a variable that will have 7 digits in total, or a **precision** of 7 digits,
<br/>
but 2 of those digits have to come after a decimal point. Do this:
```sql
DECLARE @myVar AS DECIMAL(7,2)
OR
DECLARE @myVar AS NUMERIC(7,2)
```
**12345.67** is **valid** for the above.
<br/>
**123456.7** is **not valid**.
<br/>
**Note** both numbers are 7 digits, but the second parameter condition is not satisfied.

`DECIMAL()` and `NUMERIC()` will round numbers up or down.

`MONEY` and `SMALLMONEY` will round numbers up or down at the 4th decimal place.

To declare and initialise a `FLOAT` variable. Why 24? Click on this [FLOAT](https://docs.microsoft.com/en-us/sql/t-sql/data-types/float-and-real-transact-sql?view=sql-server-ver15) to read the Microsoft documentation.

```sql
DECLARE @myFloat AS FLOAT(24) = 123456.7891;
OR
DECLARE @myFloat AS REAL(24) = 123456.7891;
-- this will produce 123456.7
SELECT @myFloat AS myColumn;
```

| myColumn |
|:--------:|
| 123456.7 |

`FLOAT`s allow for very large numbers.

`FLOAT(24)` is **precise** to 7 digits.

`FLOAT(53)` is **precise** to 15 digits.

Avoid using `FLOAT`s unless there is a very **specific** reason.

### Some Mathematical Functions
***
`POWER( [expression], [power] )` returns the specified power of the expression.

`SQUARE( [expression] )` returns the squared value of the expression.

`SQRT( [expression] )` returns the square root of the expression.
```sql
DECLARE @myVar AS NUMERIC(7,2) = 3;

SELECT POWER(@myVar,3); -- 27
SELECT SQUARE(@myVar); -- 9
SELECT POWER(@myVar,0.5); -- 1.73
SELECT SQRT(@myVar); -- 1.73205080756888
```
`FLOOR( [expression] )` returns the expression rounded **down**.

`CEILING( [expression] )` returns the expression rounded **up**.
```sql
DECLARE @myVar AS NUMERIC(7,2) = 12.345;

SELECT FLOOR(@myVar); -- 12
SELECT CEILING(@myVar); -- 13
```
`ROUND( [expression], [decimal place] )` returns the nearest whole number of the expression. The second parameter is the specified decimal place.

Read more about ROUND() [here](https://docs.microsoft.com/en-us/sql/t-sql/functions/round-transact-sql?view=sql-server-ver15).
```sql
SELECT ROUND(12.345, 1); -- 12.4
SELECT ROUND(12.345, 2); -- 12.35
```
[PI()](https://docs.microsoft.com/en-us/sql/t-sql/functions/pi-transact-sql?view=sql-server-ver15) returns the constant value of PI.
```sql
SELECT PI(); -- 3,14159265358979
```
[EXP()](https://docs.microsoft.com/en-us/sql/t-sql/functions/exp-transact-sql?view=sql-server-ver15) returns the exponential value of the specified float expression.
```sql
SELECT EXP(1); -- 2,71828182845905
```
`ABS()` returns the positive form of the expression.

`SIGN()` returns **1** if the expression is **positive**, **-1** if it's **negative** and **0** if it's **zero**
```sql
DECLARE @myVar AS NUMERIC(7,2) = -12345.67;

SELECT ABS(@myVar) AS myABS, SIGN(@myVar) AS mySign;
```

| myABS    | mySign |
|:--------:|:------:|
| 12345.67 | -1.00  |

[RAND()](https://docs.microsoft.com/en-us/sql/t-sql/functions/rand-transact-sql?view=sql-server-ver15) returns a pseudo-random float value from 0 through 1, exclusive.
```sql
SELECT RAND(1); -- 0,713591993212924, some random ass number
```
Here's more [Mathematical Functions](https://docs.microsoft.com/en-us/sql/t-sql/functions/mathematical-functions-transact-sql?view=sql-server-ver15).

### Converting or Casting Number Types
***
<br/>
```sql
-- the result is 1 because 3 and 2, integers, are whole numbers
SELECT 3 / 2 AS firstResult;
-- changing one of them to a decimal will produce a decimal value
SELECT 3.0 / 2 AS secondResult;
SELECT 3 / 2.0 AS thirdResult;
```

| firstResult | secondResult | thirdResult |
|:-:|:-:|:-:|
| 1 | 1.500000 | 1.500000 |

Use `CONVERT( [data type], [expression] )`

or `CAST( [expression] AS [data type] )` to convert values.

**Implicit** conversion or casting from `INT` to `DECIMAL`.
```sql
DECLARE @myVar AS DECIMAL(5,2) = 3;
SELECT @myVar AS implicitCast;
```

| implicitCast |
|:-:|
| 3.00 |

**Explicit** conversion or casting from `INT` to `DECIMAL`.
```sql
SELECT CONVERT(DECIMAL(5,2), 3) / 2; -- 1.500000
SELECT CAST(3 AS DECIMAL(5,2)) / 2; -- 1.500000
```

You can also **cast** from a smaller type to a larger type. *(Observe below:)*
```sql
-- this is casting DECIMAL to INT (whole numbers)
SELECT CONVERT(INT,12.345) + CONVERT(INT,12.7) AS firstCast;
SELECT CONVERT(INT,12.345 + 12.7) AS secondCast;
```

| firstCast | secondCast |
|:-:|:-:|
| 24 | 25 |

If you're casting a value to a type that is too small you can use `TRY_CONVERT` or `TRY_CAST` instead,
and it will return `NULL` if an **Arithmetic Overflow Error** has occurred.*(Observe below:)*
```sql
-- TINYINT max is 255
SELECT TRY_CAST(255.00 AS TINYINT) AS myFirstValue
SELECT TRY_CAST(2555.00 AS TINYINT) AS mySecondValue;
```

| myFirstValue | mySecondValue |
|:-:|:-:|
| 255 | NULL |

# Section 5 | Strings
There are **4 String types** in SQL. They are defined using single quotes `''`.
* **char**
* **varchar**
* **nchar**
* **nvarchar**

`CHAR` and `VARCHAR` work in the **ASCII** range, and they only use **1 byte** of memory.

`NCHAR` and `NVARCHAR` work in the **Unicode** range, and they use **2 bytes** of memory.<br/>
*(These are useful for symbols, such as the Arabic characters, because they fall in the Unicode range.)*

`CHAR` & `NCHAR` allocate memory statically.

The allocated size doesn't change even if the assigned string is empty.
```sql
-- uses 1 byte per character
DECLARE @myChar AS CHAR(10);
-- empty string
SET @myChar = '';

SELECT @myChar AS myString,
LEN(@myChar) AS myLength,
DATALENGTH(@myChar) AS myDataLength;
```

| myString | myLength | myDataLength |
|:-:|:-:|:-:|
|   | 0 | 10 |

```sql
-- uses 2 bytes per character
DECLARE @myNChar AS NCHAR(10);
-- empty string
SET @myNChar = '';

SELECT @myNChar AS myString,
LEN(@myNChar) AS myLength,
DATALENGTH(@myNChar) AS myDataLength;
```

| myString | myLength | myDataLength |
|:-:|:-:|:-:|
|   | 0 | 20 |

`VARCHAR` & `NVARCHAR` allocate memory dynamically.

The allocated size changes as the size of the string changes [+ 2 bytes](https://docs.microsoft.com/en-us/sql/t-sql/data-types/char-and-varchar-transact-sql?view=sql-server-ver15).
```sql
-- allocated size is 10 bytes,
-- but the myDataLength column will return 5 bytes
-- (plus 2 bytes under the hood)
DECLARE @myVarchar AS VARCHAR(10)
SET @myVarchar = 'hello';

SELECT @myVarchar AS myString,
LEN(@myVarchar) AS myLength,
DATALENGTH(@myVarchar) AS myDataLength;
```

| myString | myLength | myDataLength |
|:-:|:-:|:-:|
| hello | 5 | 5 |

```sql
-- allocated size is 10 bytes,
-- but the myDataLength column will return 4 bytes
-- (plus 2 bytes under the hood)
DECLARE @myNVarchar AS NVARCHAR(10)
SET @myNVarchar = 'hi';

SELECT @myNVarchar AS myString,
LEN(@myNVarchar) AS myLength,
DATALENGTH(@myNVarchar) AS myDataLength;
```

| myString | myLength | myDataLength |
|:-:|:-:|:-:|
| hi | 2 | 4 |

SQL stores rows in bunches of 8096 bytes.
So the minimum & maximum allocated memory bytes can be 1 & 8000.
If you need to go beyond that, use this:
```sql
-- this allocates 2 billion bytes or 2 gigabytes
VARCHAR(MAX);
NVARCHAR(MAX);
```

Windows has a program called **Character Map** that will show you **ASCII** and **Unicodes**.

Note special characters with `CHAR` & `NCHAR`:
```sql
DECLARE @myChar AS CHAR(6);
SET @myChar = 'helloӁ';
SELECT @myChar AS myString;
```

| myCharString |
|:-:|
| hello**?** |

```sql
DECLARE @myNChar AS NCHAR(6);
SET @myNChar = 'helloӁ';
SELECT @myNChar AS myString;
```

| myNCharString |
|:-:|
| helloӁ |

Note what happens if you assign a string value that is too long for the allocated size:
```sql
DECLARE @myCharString AS CHAR(7);
SET @myCharString = 'mynamejeff';
SELECT @myCharString AS myCharStringCol;
```

| myCharStringCol |
|:-:|
| mynamej |

The `SELECT` statement below gives us **question marks** when it shouldn't.

Observe the **implicit** conversion from `NVARCHAR` to `VARCHAR` in the output.
```sql
DECLARE @myNVarchar AS NVARCHAR(20);
-- implicit conversion happens here
SET @myNVarchar = 'Привет friend';

SELECT @myNVarchar AS myString;
```

| myString |
|:-:|
| ?????? friend |

You can fix this by prefixing the string with an **uppercase** `N`:
```sql
SET @myNVarchar = N'Привет friend';
```

| myString |
|:-:|
| Привет friend |

### Some String Functions
SQL Server is **NOT** zero-based. It starts counting from 1 unlike most programming languages.

`LEFT( [string], [amount of characters] )` to print the characters from the left/start of the string.

`RIGHT( [string], [amount of characters] )` to print the characters from the right/end of the string.

Check it:
```sql
DECLARE @charASCII AS VARCHAR(10) = 'helloꝳ';
DECLARE @charUNICODE AS NVARCHAR(10) = N'helloꝳ';

SELECT LEFT(@charASCII,2) AS myASCII,
RIGHT(@charUNICODE,2) AS myUNICODE;
```

| myASCII | myUNICODE |
|:-:|:-:|
| he | oꝳ |

`SUBSTRING( [string], [starting index], [amount of characters] )` to extract a specific substring of characters.
```sql
-- 'noface' could've been in a @variable as well
SELECT SUBSTRING('noface',3,2) AS middleLetters;
```

| middleLetters |
|:-:|
| fa |

`LTRIM( [string] )` trims **leading** spaces, or spaces to the **left** of the string.

`RTRIM( [string] )` trims **trailing** spaces, or spaces to the **right** of the string.

`TRIM( [string] )` trims **leading** & **trailing** spaces, or spaces to the **left** & **right** of the string.
```sql
SELECT
LTRIM('     I Had Spaces To My Left') AS leftSpacesTrimmed,
RTRIM('I Had Spaces To My Right     ') AS rightSpacesTrimmed,
TRIM('     Spaces were on all sides     ')) AS trimmedLeftAndRight;
```

| leftSpacesTrimmed | rightSpacesTrimmed | trimmedLeftAndRight |
|:-:|:-:|:-:|
| I Had Spaces To My Left | I Had Spaces To My Right | Spaces were on all sides |

`REPLACE( [string], [characters to replace], [new character] )` replaces all instances of a character with a new character.

`UPPER( [string] )` converts the characters to **uppercase**.

`LOWER( [string] )` converts the characters to **lowercase**.
```sql
REPLACE('hello','h','J') AS replacedCharacters,
UPPER('small') AS uppercase,
LOWER('BIG') AS lowercase;
```

| replacedCharacters | uppercase | lowercase |
|:-:|:-:|:-:|
| Jello | SMALL | big |

Here's more [String Functions](https://docs.microsoft.com/en-us/sql/t-sql/functions/string-functions-transact-sql?view=sql-server-ver15).

`NULL` usually means that your variable does not have a value assigned to it.
```sql
DECLARE @myVar AS INT;
SELECT @myVar AS myCol;
```

| myCol |
|:-:|
| NULL |

### String Concatenation

The following are some examples of concatenating strings.

If you add anything to **NULL** the returned value is **NULL**.
<br/>See **FullName column**.

The `IIF()` function has 2 i's and it was added from Microsoft Access.
<br/>See **FullName1 column**.

`CASE WHEN THEN ELSE END` is not as compact as `IIF()`,
<br/>but it does have its special use cases.
<br/>See **FullName2 column**.

`COALESCE()` takes as many arguments as you like
<br/>It checks if each argument, starting from the left, is **NULL**
<br/>and returns the argument that is not **NULL**.
<br/>See **FullName3 column**.

`CONCAT()` takes as many arguments as you like
<br/>and if any argument is **NULL** it disregards it.
<br/>See **FullName4 column**.

```sql
DECLARE @firstName AS NVARCHAR(20);
DECLARE @middleName AS NVARCHAR(20);
DECLARE @lastName AS NVARCHAR(20);

SET @firstName = 'Edgar';
-- SET @middleName = 'Allan';
SET @lastName = 'Poe';

SELECT @firstName + ' ' + @middleName + ' ' + @lastName AS FullName;

-- IIF @middleName equals NULL,
-- return an empty string,
-- else concatenate a space and @middleName
SELECT @firstName
+ IIF(@middleName IS NULL, '', ' ' + @middleName)
+ ' ' + @lastName AS FullName1;

-- WHEN @middleName IS NULL
-- THEN return an empty string
-- ELSE concatenate a space and @middleName
-- END the case
SELECT @firstName
+ CASE WHEN @middleName IS NULL THEN '' ELSE ' ' + @middleName END
+ ' ' + @lastName AS FullName2;

-- A space + @middleName is NULL is this case
-- because @middleName was not assigned a value
-- The next argument (empty string) is not NULL
SELECT @firstName
+ COALESCE(' ' + @middleName, '')
+ ' ' + @lastName AS FullName3;

-- @firstName is not NULL,
-- ' ' + @middleName is NULL,
-- @lastName is not NULL.
SELECT CONCAT(@firstName, ' ' + @middleName, ' ', @lastName)
AS FullName4;
```

| FullName | FullName1 | FullName2 | FullName3 | FullName4 |
|:-:|:-:|:-:|:-:|:-:|
| NULL | Edgar Poe | Edgar Poe | Edgar Poe | Edgar Poe |
