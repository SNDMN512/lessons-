let num = 266219
//const arr = String(num).split("").map(Number)
const arr = Array.from(String(num), Number)

multiplyNum = arr.reduce((n1, n2) => n1 * n2)
totalPow = multiplyNum ** 3

console.log(totalPow);






