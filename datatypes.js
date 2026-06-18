/*
Since the JS is dynamically typed language we do not need to declared a name of the datatype like 
string integer, double float boolean and others

example given below
if we decalare name its type is String
if we declare number its type is integer
if we declare greater number its type is double and also bigint
and declare number in decimal its type is float



Data type categorize into Primitive and non-primitive data type


<<<<<<<<<Primitive>>>>>>>>>>>>>>                          <<<<<<<Non -Primitive >>>>>>>>>>>>>>>
                                                                Object 
                                                                arrays
                                                                Function
String
integer
float
symbol
undefined =>The value is undefined mean value is not assign to variable
null => it is the representation of an empty value
bigint
*/ 

let name = "Anees Ali"
let age = 20
let Fnumber = 3.14
let isloggedIn = true
let bigint = 12235837231293817293173123123123213121238120312931238121203
let stte = null;
let anything;

console.table([typeof name, typeof age, typeof Fnumber, typeof isloggedIn , typeof bigint, typeof stte, typeof anything]);
/*
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'string'    │
│ 1       │ 'number'    │
│ 2       │ 'number'    │
│ 3       │ 'boolean'   │
│ 4       │ 'number'    │
│ 5       │ 'object'    │
│ 6       │ 'undefined' │
└─────────┴─────────────┘
*/





