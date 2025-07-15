// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 25
    // console.log("INNER:",a);
}




// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "spiderman"

    function two(){
        const website =" marvel"
        // console.log(username);
    }
    // console.log(website);

    two()

}

one()

if (true){
    const username = "spiderman"
    if(username === "spiderman"){
        const website = " marvel"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username)


// +++++++++++++++++++interesting+++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num+1
}



(addTwo(5))
const addTwo = function(num){
    return num + 2
}
