// Arrays in JS are resizable once declared size it can b appendable
// can store any type of data in arrays

let myarr = [1,2,3,4,5,6,7,8,9]
console.log(myarr[3]);

// _______________________[Arrays Methods]_________________
myarr.push("I'm learning Arrays in JS") // push method is used to add new element in the last of the array
console.log(myarr);

// // pop method is used to remove recently appended element means last element of the array
myarr.pop()
console.log(myarr);

// // shift and unshift method
myarr.unshift("This is new inserted Element")//unshift method add new element at the start
console.log(myarr);

// myarr.shift()// shift method remove the new inserted element from the start
console.log(myarr);
myarr.shift()
console.log(myarr);

// console.log(myarr.includes("Hello"))// include method is like a asking a question like if we asked this element is exist or not ans in true or false format

let newarray = myarr.join()
console.log(myarr);
console.log( typeof newarray);

console.log(" A--> ", myarr)
let mn1 = myarr.slice(1,4)// get only the portion of the array
console.log(mn1);

console.log(" B--> ", myarr)
let mn2 = myarr.splice(1,4)// can manipulate the array
console.log(" C--> ", myarr)
console.log(mn2);



//___________________________________[Array Part 2 ]______________________________________

let Pakistani_singers = ["Atif Aslam","Fawad Khan","Rahat Fateh Ali khan","Nusrat Fateh Ali Khan"]
let Indian_Singers = ["Jubin Noutiyal","Naina Kakar","Badshah","Arijit singh"]

let allin_onePlace = Pakistani_singers.push(Indian_Singers)
console.log(allin_onePlace);

let allin_onePlace = Pakistani_singers.concat(Indian_Singers)
console.table([allin_onePlace]);

// _______________________{Spread OPerator  }____________________________-

let Bolly_woodactors = ["Salman Khan","Amir Khan","Shahrukh khan","katrina Kaif","Tiger Shroff","Ajay Devgan"]
let movies_Names = ["Tiger Zinda hey","Dhoom 3,Dangal","Bakrah Movie aeeeh aeeh 😂🤣","hero panti","Is ki yaad Nahi😂"]

let actorand_their_movies = [...Bolly_woodactors, ...movies_Names]
console.log(actorand_their_movies);



const mixed_up_array = [12,34,["Hi","I","am","leaning JS"],["How are you",["What is going in today",["😐"]]]]

const flatarray = mixed_up_array.flat(Infinity)
console.table([flatarray]);


console.log(Array.isArray("I'm learning Arrays"))
console.log(Array.from("I'm learning Arrays"))

console.log(Array.from({
    lang01:"Java",
    lang02 : "Python",
    lang02 : "JS"
})) // This is the interesting case for the interview objects caannot directly convert into arrays 


const lang_01 = "Java"
const lang_02 = "Python"
const lang_03 = "JavaScript"

console.log(Array.of(lang_01,lang_02,lang_03));// This is the seocdmethod of the converting to arrays











