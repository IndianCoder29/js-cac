//primitive(call by value) and non-primitive(call by reference)
//Primitive     7types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = false //dynamically typed  as it auto dataTypes
//const score:number = 101 //typescript
const scoreVale = 100.3
const isLoggedIn = false
const outsideTemp = null //object dataType
let userEmail; //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);  //not same

const bigNumber = 312155646865116874n
console.log(typeof(bigNumber));
console.log(typeof(outsideTemp));

//Non-Primitive : Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "bajju",
    age : 22,
}

const myFunction = function () {
    console.log("Hello World!!");    
}
console.log(typeof myFunction); //function
console.log(typeof anotherId); //function

//-------------------------------------------------------------

//Stack (primtive)
//Heap  (non-primtive) changes commit to og val

let myYoutubeChannel = "ProgrammingwithBB"
let anotherName = myYoutubeChannel
anotherName = "ChaiaurCode"

console.log(myYoutubeChannel);
console.log(anotherName);

let userOne = {
    email : "user@mail.com"
    upi : "user@bank"
}

let userTwo = userOne

userTwo.email = "bajrang@google.com"

console.log(userOne);
console.log(userTwo);
