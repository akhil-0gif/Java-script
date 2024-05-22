//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/*const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')// it looks same bacuase of the the value 123 passes it to the smybol but its help to uniquely identify the compomnents
const anotherId = Symbol('123')//id and anotherId have uniqely identify 

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);
console.log(typeof myFunction);
console.log(typeof myObj);

 https://262.ecma-international.org/5.1/#sec-11.4.3*/


//************************************************************** 

// let myName= "Akhil"
//  let anotherName=(myName)
//  anotherName="Shivi"
//  console.log(myName);
//  console.log(anotherName);


 let user1 = {
    email:"akhil.com",
    password:3421313

}
 
let user2 =user1;

user1.email="aksd.com"

console.log(user1);
console.log(user2);