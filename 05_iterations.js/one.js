//                           for loop

/*                            01
 for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");   
    }
    console.log(element);  
 }
*/


/*                            02 - Nested loops
for (let i = 0; i <= 10; i++) {
    console.log('outer loop value :${i}' );
    for (let j = 0; j < 10; j++) {
      // console.log('inner loop value :${j}' );
       console.log(i + '*' + j + '=' + i*j);       
    }
    
}
*/


/*                          03
 let myArray = ["flash" , "batman" , "superman"]
 console.log(myArray.length);
 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); 
 }
*/ 

//                      Break and Continue


/*                       Break 
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log('Detected 5');
        break
    }
    console.log('value of i is ${index}');
    
}
*/

/*                     Continue
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log('Detected 5');
        continue
    }
    console.log('value of i is ${index}');
    
}
*/