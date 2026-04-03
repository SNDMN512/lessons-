"use strict";

let lang = prompt("Введите ru или en");

const weeks = [['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
              ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']];


let week = lang == "ru" ? weeks[0].toString() : lang == "en" ? weeks[1].toString() : "Введите ru или en";
console.log(week);


let namePerson = prompt("Введите имя", "Студент");
namePerson == "Артем" ? console.log("Директор") : namePerson == "Александр" ? console.log("Преподаватель") : console.log("Студент");

