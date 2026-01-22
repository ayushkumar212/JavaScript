//  ***********************  Arrays *************************

// In javascript there would  be more thn 1 datatype in array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman " , "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// *************************  Array Methods  **********************

myArr.push(6)   // Adds nos to the end of the array
myArr.push(7)

myArr.pop()     // removes the last digit  of the array 

myArr.unshift(9)   // Adds nos to the starting of the array

myArr.shift()      // removes the first digit of the array

console.log(myArr.includes(9));   // tells whether it is present or not in the array in boolean form 

console.log(myArr.indexOf(3));     // tells the index at which it is present

const newArr = myArr.join()  // converts the array to strings
console.log(newArr);

// slice ,  splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3) // in slice we get the values that we have given as input and xcludes  the last no

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3) // it is  as same as slice and but  it manipulate the original array 
console.log("C" , myArr);
console.log(myn2);





