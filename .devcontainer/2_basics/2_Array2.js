const marvelhero = ["thor","spiderman","ironman"]
const dchero = ["superman","batman","flash"]

// marvelhero.push(dchero)

// console.log(marvelhero);
// console.log(marvelhero[3][1]);

// const allHero = marvelhero.concat(dchero)
// console.log(allHero);

const allHero = [...marvelhero,...dchero]

// console.log(allHero);

const anotherarray = [1,2,3[4,5,6[7,8,9]]]

const realarray = anotherarray.flat(Infinity);
console.log(realarray);
