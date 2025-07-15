const user = {
    username: "spiderman",
    price: 799,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "spodormon"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "spiderman"
//     console.log(this.username);
// }

// chai()

const chai = ()=> {
    let username = "spiderman"
    console.log(this);
}


// chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// const addTwo = (num1,num2)=> num1+num2

// const addTwo = (num1,num2)=> (num1+num2)

const addTwo = (num1,num2) => ({username:"spiderman"})


console.log(addTwo(543,456));

// const myArray = [2,3,4,5,6]

// myArray.forEach()
