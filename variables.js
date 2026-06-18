/*
There are three methods of declaring variables 
these are the keywords of declareing variables
let => redeclared changes only Happen in block scoped
var => can b redeclared bockscoped and functional scoped
const => use for only constant values like pi value once declared can't b changed
*/ 

const accountId = 1234567;
let accountName = "Anees Ali";
var accountPassword = "123456789"
accountCity = "Karachi"


/*
check the variables which can change
*/ 

// accountId = 2
// console.log(accountId);

// accountId = 2
// // TypeError: Assignment to constant variable.

accountName = "Hassan"
accountName = "Shahmir"
accountPassword = "6789"
accountCity = "lahore"
console.table([accountId,accountName,accountPassword,accountCity]);

/*
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 1234567   │
│ 1       │ 'Shahmir' │
│ 2       │ '6789'    │
│ 3       │ 'lahore'  │
└─────────┴───────────┘
*/ 

