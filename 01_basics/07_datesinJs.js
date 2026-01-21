//********************          date         *****************************

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let  myCreatedDate = new date (2023,0,23)
let  myCreatedDate = new date(2023,0,23,5,3)
let  myCreatedDate = new date("2023-01-14")
let myCreatedDate = new date ("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate .toLocaleString('default',{
    weekday: "long",
}) 




