/*
Conversion of datatypes in js is little bit confusing but from these notes you will understand easily
Example below
*/
// let score = "33"

// // conversion Steps

// let newValue = Number(score)
// console.log(typeof newValue);


// let score = "33abc"

// // conversion Steps

// let newValue = Number(score)
// console.log(typeof newValue);
// console.log(newValue); // it will give NaN its special type of NaN but also its type is Number

// let score = null

// // conversion Steps

// let newValue = Number(score)
// console.log(typeof newValue);
// console.log(newValue);


// let score1 = undefined

// // conversion Steps

// let newValue1 = Number(score1)
// console.log(typeof newValue1);
// console.log(newValue1);

// let score2 = true

// // conversion Steps

// let newValue2 = Number(score2)
// console.log(typeof newValue2);
// console.log(newValue2);


/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<[Operation ]>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
let str1 = "you"
let str2 = " learn JS"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);   
console.log(1 + "2");    
console.log("1" + 4 +2);  
console.log(1+ 2 + "4");   
console.log(1 + "2"+ 4);  

// some tricky converion

console.log(+true);

console.log(+"");
console.log(+false);


