const User = {
    _email:'spodormon@example.com',
    _password:'passcode',


    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const coffee = Object.create(User);
console.log(coffee.email); 