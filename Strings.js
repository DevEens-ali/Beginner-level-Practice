let name = "Your Name"
let age = "20"
const repocount = "50"

// console.log(name + age + repocount + "Value" ); this is an old way 

// console.log(`Your name is ${name.toUpperCase()} and age is ${age} and total repositories are ${repocount}`);

// Another way of declaring a String 

// let gameName = new String("Pubg")
// console.log(gameName);
// console.log(gameName.__proto__)

// it will give an empty object



// accessing keys and its values
// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName[3]);

// ___________________________________________________________________________________________

//Strings Methods
//1: Length()

let newString = "I learn Javascript"
console.log(newString.length);
console.log(newString.toUpperCase())
console.log(newString.toLowerCase());
console.log(`output with spaces ${newString}`);
console.log(newString.trim());// also have trimend() and trimstart() but both trim() work as both
console.log(newString.substring(1,5)) // If we get the portion of the string does not support negative number
console.log(newString.slice(1,6));// both substring and slice having same working bt slice support negative number
console.log(newString.slice(-18,7));
console.log(newString.replace("Javascript","Strings Methods"));
console.log(newString.replaceAll("I learn Javascript","After Learning JS. I will learn React JS"));

console.log(newString.includes("Java"));
console.log(newString.endsWith("script"))
console.log(newString.startsWith("I learn"));
console.log(newString.indexOf("c"));
console.log(newString.charAt(1));
console.log(newString.split(" "));













