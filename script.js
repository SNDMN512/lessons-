let num; let total; let strNum; let totalPow;
num = 266219;
strNum = num.toString();
total = 1;

for (let i = 0; i < strNum.length; i++) {
    total*=Number(strNum[i])
}
console.log(total);

totalPow = total ** 3
console.log(totalPow);

console.log(Number(totalPow.toString().slice(0,2)));

