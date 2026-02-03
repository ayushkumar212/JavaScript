// in case if we use the var then that will show different thing if instead of using const and let that's why we dont use var much 

 //  {} = this curly braces is known  as scope 
 
 let a = 300   // this is called as global scope 
 if(true){
    let a = 10                  // values inside the {} braces is called as block scope
    const b = 20
    console.log("INNER: " , a);
    
 }

//  console.log(a);
//  console.log(b);
//  console.log(c);
 


//                          Nested scope

//  02

function one(){
    const username = "Ayush"

    function two(){
        const website = "youtube"
        console.log(username);   
    }
   // console.log(website);
    
   two()
}

one()

// 03

if (true) {
    const username = "Ayush"
    if (username === "Ayush") {
        const  website = " youtube"
        console.log(username + website);
        
    }
}


// ************************** Intresting *************************

console.log(addone(5));
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function (num) {
    return num + 2
    
}

// In this first function gets executed and the second can't as in this we declre the function by something


