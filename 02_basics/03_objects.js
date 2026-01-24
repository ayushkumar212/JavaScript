// singleton - constructor se jo bnega /


// object literals

// to write objects

const mySym = Symbol("key1")
const jsUser = {
    name : "Ayush",
    "full name" : "Ayush Singh",
    [mySym] : "myKey1",     // imp situation
    age : 18,
    location : "jaipur",
    email : "ayush@google.com",
    isLoggedIn : false,
    LastLoginDays : ["monday","saturday"]
}

// to access object (we do .filename[])
console.log(jsUser.email);
console.log(jsUser["email"]);  // correct way 
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "ayush@chatgpt.com"  // to change vallue in object
Object.freeze(jsUser)             // to freeze the object after thhis value cannot be changed
jsUser.email ="ayush@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello JS user");   // in this we simpliy print function
}

jsUser.greetingTwo = function(){
    console.log('hello JS user,${this.name}');   // in this we print objects in the function by using($(this.))
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




