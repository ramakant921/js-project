class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}spodormon`
    }

    set password(value){
        this._password = value
    }
}

const spodormon = new User("spodormon@example.com", "password123")
console.log(spodormon.password) 
console.log(spodormon.email) 