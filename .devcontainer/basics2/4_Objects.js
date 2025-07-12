// const tinderUser = new Object()     //singleton objects
const tinderUser = {}                   //non singleton objects  

tinderUser.id = "123abc"
tinderUser.name ="spiderman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"spodorman@gmail.com",
    fullname:{
        usernamefullname:{
            firstname:"spider",
            secondname:"man"
        }
    } 
}

// console.log(regularUser.fullname.usernamefullname.secondname)

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c",4:"d"}
const obj4 = {5: "c",6:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const user = [
    {

}]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('islogged'));