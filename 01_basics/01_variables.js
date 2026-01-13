const accountId = 144553
let accountEmail = "singh@gmail.com"
var accountpassword = "12345"
accountcity = "jaipur"
let accountState;

// accountId = 2    not allowed 

accountEmail = "ayush@gmail.com"
accountpassword = "212121210"
accountcity = "pune"

console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountpassword,accountcity,accountState])