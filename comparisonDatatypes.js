console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 != 1);
console.log(!2);


/* These are simple comparison checks that resault will b given in the form of boolean values True or false*/


// these checks a little bit confusion because null sometime convert into NaN and sometime 0


// <<<<<<<<<<<<<<<<<<Note>
// equality check and comparison check work differently in JS in comparison check it will convert to zero 0
console.log(null > 0);
console.log( null == 0);
console.log( null <= 0);


// same with undefined, undefined always give false


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined <= 0);

// loose equality check represent with == it simply check only values
// Example 
console.log(2 == 1);
console.log("2" == 1); /* in thic case string convert into number js automatically convert in to number and give false*/


// Strict equality check it check values and also check its datatypes 
console.log(2 === 1);
console.log("2" === 1)



