"use strict";

// Task1

let arr = ['2456465464654', '7979651616', '8989846564', '451231851', '131315135', '26546486', '45666664833'];
const arrNum = arr.filter((num) => num[0] == '2' || num[0] == '4')

console.log(arrNum);

// Task2

for (let i = 2; i < 101; i++) {
    if (i == 2) {
        console.log(i, 'Делители:', 1, 'и', i)
    }
    else if (i < 9) {
        if (i % 2 == 0) {
            continue
        } else {
            console.log(i, 'Делители:', 1, 'и', i) 
        }
    } else if (i == 9) {
        continue
    } else {
        if ((i % 2 == 0 || i % 3 == 0 || i % 4 == 0 || i % 5 == 0 || i % 6 == 0 
            || i % 7 == 0 || i % 8 == 0 || i % 9 == 0) && (i % i == 0 && i % 1 == 0)) {
            continue
        } else {
            console.log(i, 'Делители:', 1, 'и', i)
        }
    }  
}        