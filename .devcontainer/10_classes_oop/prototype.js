// let myName = "spodormon       "
// let myName2 = "spodormon       "

// console.log(myName.trueLength)


let myHeroes =["thor","hulk","spiderman"]


let heroPower = {
    thor: "thunder",
    hulk: "smash",
    spiderman: "ryan_gosling",

    getSpiderPower: function(){
        console.log(`Spiderman's power is ${this.spiderman}`);
        
    }
}

Object.prototype.spodormon = function(){
    console.log(`ryan gosling is literally me !!`)
}

Array.prototype.spenderman = function(){
    console.log(`Spenderman says hello`);
}

// heroPower.spodormon()
// myHeroes.spodormon()
// myHeroes.spenderman()
// heroPowerPower.spenderman()


// inheritance

const User = {
    name: "spodormon",
    email: "spodormon@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, User)

let anotherUsername = "Deadpool     "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"spodormon".trueLength()
"Coffee".trueLength()