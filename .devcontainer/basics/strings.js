const name = "spodormon "
const repoCount = 45

// console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("spider-man-newyork")

// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('5'));
// console.log(gameName.indexOf("D"));



const newString = gameName.substring(0,4)
console.log(newString); 

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "   hello   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://spiderman.com/spiderman%20tri "
console.log(url.replace("%20","-"))

console.log(url.includes("spiderman"))

console.log(url.includes("thor"))

console.log(gameName.split("#"));

