"use strict";
// Task 1

let arr = ['15468879', '24564654658', '7897856644656', '26464646468646645', '646448464648165', '4561321561161651135', '687996464556'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || arr[i][0] === '4') {
        console.log(arr[i])
    }
}

// Task 2
let num = 2
nextPrime:
for (let i = 2; i < 101; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
        continue nextPrime
        }
    }
    console.log(i)
    
}
