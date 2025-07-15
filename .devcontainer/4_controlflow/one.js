// IF
const isUserLoggedIn = true
const temperature = 41

if( temperature === 40
 ){
    // console.log("less than 50");
} else {
    // console.log("temperature is greater than 50")
}
// console.log("executed");
// <, >, <=, =>, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "swing"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


const balance = 1000

// if (balance>500) console.log("test"), console.log("test2");

// if(balance < 500){
//     console.log("less than");

// } else if(balance < 750){
//     console.log("less than 750");

// } else if (balance < 900){

// }else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = true
const LoggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course ");
}

if (LoggedInFromGoogle || LoggedInFromEmail){
    console.log("user logged in");
}