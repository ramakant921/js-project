class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username); // Call the parent class constructor
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const spodormon  = new Teacher("spodormon", "spodormon@example.com", "securepassword");

spodormon.addCourse()
const coffee = new User("coffee");

coffee.logMe()

console.log(spodormon  instanceof User);