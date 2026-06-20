/* Stack memory and heap memory 
Stack [Primitive datatypes]
Copy of variables is shared means changing happen in copy of variable does not affect the original values


Example
*/
let yourID_is = 1

let yoursecondID = yourID_is
yoursecondID = 2
console.log(yoursecondID);
console.log(yourID_is);





/*
Heap [Non Primitive Datatypes] also known as reference type
reference is passed changing happen in orginal values

Example
*/

let user1 = {
    email : "example@email.com",
    age  : 20
}
let user2 = user1;
user2.email = "user2@email.com"
console.log(user2);
console.log(user1);


