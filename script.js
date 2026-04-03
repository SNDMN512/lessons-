"use strict";

const str1 = 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh';
const str2 = 'hhhhhhhhhhhhhhhhhhhhh';
const str3 = '           hhhhhhhhhhhhhhhhhhhhh             ';
const str4 = '                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh               ';

const stringConversion = function (str) {
    str = str.trim()
    if (typeof str === 'string') {
        if (str.length > 30) {
            return str.slice(0,31) + '...'
        } else {
            return str
        }
    } return "Введите строку!"
}

console.log(stringConversion(str1))
console.log(stringConversion(str2))
console.log(stringConversion(str3))
console.log(stringConversion(str4))

