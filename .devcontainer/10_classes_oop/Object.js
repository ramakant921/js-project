function multipleBy5(num){
    this.num = num
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);  

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`people saved is ${this.score}`)
}

const spodor = new createUser("spodor", 10);
const mon = new createUser("mon", 20);

spodor.printMe();