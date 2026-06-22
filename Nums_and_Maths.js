let score = 100
console.log(score);


let balance = new Number(123456)
console.log(balance.toString());
console.log(balance.toExponential(2))
console.log(balance.toFixed()); // fixed method places to round number to fixed decimal number places
console.log(balance.toLocaleString("en-IN"));
console.log(balance.toPrecision(4));
console.log(balance.valueOf()); //Number Object ki actual prmitive return krta hey 


//_________________________________________________________________________-

// Math is an object
console.log(Math); 
console.log(Math.abs(-4)); // convert negative to positive and positive number remain same
console.log(Math.round(4.5)); 
console.log(Math.ceil(4.2)); 
console.log(Math.floor(4.8)); 
console.log(Math.pow(2,6)); 
console.log(Math.sqrt(196)); 
console.log(Math.max(5356,5356,7676,5353,5435)); 
console.log(Math.min(98,67,45,67,45)); 


console.log(Math.random()) // it always give the number between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min );







