// 01_Primitive datatype: are of 7 types 

//  7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 1000
const scoreValue = 1000.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id===anotherId)


const bigNumber = 12345678n


// 02_Reference (Non primitive):

// Array, Objects, Functions


const heroes = ["ironman","thor","loki"]
let myObj = {
    name : "ramakant",
    age : 19,

}


const myFunction = function(){
    console.log("hello world")
}

console.log(typeof scoreValue);