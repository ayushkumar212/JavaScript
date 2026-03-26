/*                        forEach loop

const coding = ["js" , "ruby" , "java" , "python" , "cpp "]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values);

In forEach loop we dont get the return value

*/


/*                          Filter

const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

In filter we use call back funcn and use conndition that is basic about filter

*/


/*

const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newNums = myNums.filter( (num) => {
    return num > 4
} )
console.log(newNums);

In filter if we are using scope curly braces 
then it is compulsory to return

*/ 


/*

const newNums = []

myNums.forEach(  (num) => {
    if(num > 4) {
        newNums.push(num)
    }
});

console.log(newNums);

*/


//                                 maps

/*

const myNumers = [1, 2, 3, 4 , 5 , 6 ,7, 8 , 9 , 10]

const newNums = myNumers.map( (nums) => {return num  + 10})
console.log(newNums);

*/

// chaining : using two to thre methods  simultaniously


/*

const myNumers = [1, 2, 3, 4 , 5 , 6 ,7, 8 , 9 , 10]

const newNums = myNumers
                 .map( (num) => num * 10 )
                 .map( (num) => num + 1)
                 .filter  ( (num)   => num => 40)

console.log(newNums);

*/
