 //                            for of loop
 
 /*       syntax: for of loop
for (const element of object) {
    
}
*/
 
//  [" "," "," "]
//  [{ },{ },{ }]


/*                                01
const arr = [1 , 2 , 3 , 4 , 5]

for (const num of arr) {
    console.log(num);
    
}
*/


/*                                02
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
   
}
*/


/*                               03
const map = new Map()
map.set('IN' , "India")
map.set('USA' , "united states of Ameriaca ")
map.set('Fr' , "France")
map.set('IN' , "India")

//console.log(map);

for (const [key , value] of map) {
    console.log(key , ':-' , value);   
}
*/

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

for (const [key, value] of myObject) {
    console.log(key , ':-' , value);  
}