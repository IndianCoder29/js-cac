const accID = 143334;  //can't be changed
let accountEmail = "abc@xyz.com";
var accPass = "12345";
let accState; //undefined by default
/*
Prefer not to use var
because of issue in block and functional scope
*/

accCity = "Jaipur";

// accID = 2; //can't be changed bro!!

accountEmail = "xyz@abc.com";
accPass = "23423";
accCity="Pune";

// console.table([accountEmail,accPass,accCity]); // tabular representation
console.log(accountEmail);
console.log(accID);
console.log(accPass);
console.log(accCity);
console.log(accState);