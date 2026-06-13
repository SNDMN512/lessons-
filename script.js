"use strict";

const week = [
    'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
]

let curentDayIndex = new Date().getDay();

let resultHtml = '';

for (let i = 0; i < week.length; i++) {
    let dayText = week[i];

    if (i === 5 || i === 6) {
        dayText = "<i>" + dayText + "</i>";
    };
    if (i === curentDayIndex - 1) {
        dayText = "<b>" + dayText + "</b>";
    }
    resultHtml += dayText + "<br/>";
}

document.querySelector(".days").innerHTML = resultHtml;


