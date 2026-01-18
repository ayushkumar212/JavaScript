/*
console.log(2 > 1 );
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 ==  1);
console.log(2 != 1);
*/
 // (in most of cases we avoid this type  of comparisions -below one)
console.log(null > 0);
console.log(null == 0);   //(the reason is that equality check == and comparison 
  //  ><>=<=<= work differently . comparison convert null to a number , treating it as 0. thats why (3) null >= 0 is tru null>0 is false)
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (it also cheecks the data type)
console.log("2" === 2);
