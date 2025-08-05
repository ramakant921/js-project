const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor);

// console.log(descriptor);
// Math.PI = 5
// console.log(Math.PI)

const coffee = {
    name: 'black coffee',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai ordered");
    }
}

console.log(Object.getOwnPropertyDescriptor(coffee,"name"))

Object.defineProperty(coffee,'name',{
//    writable:false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(coffee,"name"))

for (const [key,value] of Object.entries(coffee)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }   
}