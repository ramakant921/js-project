class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const spodormon = new User("spodormon");
// console.log(spodormon.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}    

const samsung = new Teacher("samsung", "sam@gmail.com")
console.log(samsung.createId());