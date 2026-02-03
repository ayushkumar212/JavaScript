
// 01

function sayMyName (){
console.log("A");
console.log("Y");
console.log("U");
console.log("S");
console.log("H");
}

// sayMyName [this is reference] ()[this is function call]

// 02

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2); 
// }

// 03

function addTwoNumbers(number1,number2){
    // let result = number1 + number2 
    // return result 
    return number1 + number2
}

const result = addTwoNumbers(3,5)

//console.log("Result:" , result);

// 04

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return '${username} just logged  in'
}

// console.log(loginUserMessage("ayush"));
// console.log(loginUserMessage());

// 05 - if we pass more num  of values

function calculatecartPrice (val1 , val2 , ...num1){
    return num1
} 
// console.log(calculatecartPrice(200,400,500,2000));


//  06

const user = {
    username : "Ayush",
    price : 199
}

function handleObject(anyobject){
    console.log('username is ${anyobject.username} and price is ${anyobject.price}');
    
}
//handleObject(user)
handleObject({
    username: "sam",
    price:399
}
)

