// Primitive datatypes  (call by value)

// 7 types : string , Number ,  Boolean , null , undefined , Symbol , BigInt

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 343453445544345544535n

// Non primitive   (call by Reference)

// Array , Objects ,  Functions

const heroes = ["shaktiman", "naagraj" , "doga"];

let myObj = {
    name: "Ayush"
    age:22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);





// **************************  Memory allocation ******************************
   
// Stack(primitive)       ,     Heap(Non-Primitive)

let myYoutubename = "ayushsingh.com"

let anothername = myYoutubename
anothername  = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@gmail.com"
    upi : "user@ybl"
}

let userTwo =  userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


