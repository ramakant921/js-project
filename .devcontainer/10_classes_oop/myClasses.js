// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }

// }

// const spodormon = new User("spodormon","spodormon@example.com","password123");

// console.log(spodormon.encryptPassword());
// console.log(spodormon.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return`${this.password}abc`
}
User.prototype.changePassword = function(){
    return`${this.password.toUpperCase()}abc`
}


const Deadpool = new User("Deadpool","deadpool@example.com","password456");

console.log(Deadpool.encryptPassword());