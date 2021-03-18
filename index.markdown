---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
## Section 1 | Download & Installation Guide:

1. Go to https://www.microsoft.com/en-us/sql-server/sql-server-downloads
	* Select **Downloads** >
	* **Download Now** >
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

This specifies the end of statement batches.
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
`FLOAT`s allow for very large numbers.

`FLOAT(24)` is **precise** to 7 digits.

`FLOAT(53)` is **precise** to 15 digits.

Avoid using `FLOAT`s unless there is a very **specific** reason.
