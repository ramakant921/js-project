const promise1 = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, crypography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
});

promise1.then(function(){
    console.log('Promise is resolved');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 is complete');
        resolve();
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved")
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"spodormon", email: "spodormon@example.com"})
    }, 1000)
})

promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"spodormon",  password:"6185"})
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promise4.then((user) =>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"));



const promise5 = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"spiedarman",  password:"921"})
        } else {
            reject('Error: Spiedarman went wrong')
        }
    }, 1000)
})

async function consumePromise5(){
    try{
        const response = await promise5
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise5()

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("E: ",error)
//     }
    
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))