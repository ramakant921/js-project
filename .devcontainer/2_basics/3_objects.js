// Singleton = when we make literals in variable
// Objects.create

// objects literals

const mySym = Symbol("key1")

const jsUser = {
    name: "spodormon",
    "full name":"spiderman",
    mySym: "mykey1",
    age:23,
    location:"lords ground",
    email:"spodormon@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","friday"]
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "spiderman@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "spiderman@thor.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello JS user");
}
jsUser.greetingtwo = function(){
    console.log(`hello Js user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
