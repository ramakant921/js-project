
function sayMyName(){
    console.log("B");
    console.log("A");
    console.log("T");
    console.log("M");
    console.log("A");
    console.log("N"); 
}

// sayMyName()

// function addTwoNumber(no1 , no2){
    
//     console.log(no1 + no2);   
// }

function addTwoNumber(no1 , no2){

    // let result = no1 + no2
    // console.log("spiderman")
    return no1 +no2
}
const result = addTwoNumber(3,7)


// console.log("Result: ",result);


function logInUserMessage(username = "spodormon"){
    if(!username){
        console.log("Please enter username");
        return    
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage("spiderman"));
// console.log(logInUserMessage());

function calculateCartPrice(val1,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500))


const user = {
    username: "spiderman",
    price:699
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is 
        ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"spiderman",
    price: 899
})

const myNewArray = [200,400,500,6767,4556]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,6767,4556]));