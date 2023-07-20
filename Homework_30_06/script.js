'use strict';

// Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

function pyramidDecl(num) {
    let result  = '';
    for (let i = 1; i <= num; i++) {
        result += 'X';
        console.log(result);
    }
}
// pyramidDecl(20);

const pyramidExpr = function(num) {
    let result  = '';
    for (let i = 1; i <= num; i++) {
        result += 'X';
        console.log(result);
    }
}

// pyramidExpr(20);

const pyramidArrow = (num) => {
    let result  = '';
    for (let i = 1; i <= num; i++) {
        result += 'X';
        console.log(result);
    }
};

// pyramidArrow(20);

// Написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс». Если при вызове функции
// минуты и/или секунды не были переданы, то выводить их как 00. 

function timeDecl(hours, min , sec) {
    if ((hours >= 0 && hours <= 23) && (min >= 1 && min <= 59) && (sec >= 1 && sec <= 59)) {
        console.log(`${hours}:${min}:${sec}`);
    } else if (hours > 23) {
        console.log("Некорректный ввод");
    } else if (min === 0 && sec === 0) {
         console.log(`${hours}:00:00`);
    } else if (min === 0) {
        console.log(`${hours}:00:${sec}`);
    }  else if (sec === 0) {
        console.log(`${hours}:${min}:00`);
    }  else {
        console.log("Некорректный ввод");
    }
}

timeDecl(12,0,59);

const timeExpr = function(hours, min, sec) {
    if ((hours >= 0 && hours <= 23) && (min >= 1 && min <= 59) && (sec >= 1 && sec <= 59)) {
        console.log(`${hours}:${min}:${sec}`);
    } else if (hours > 23) {
        console.log("Некорректный ввод");
    } else if (min === 0 && sec === 0) {
         console.log(`${hours}:00:00`);
    } else if (min === 0) {
        console.log(`${hours}:00:${sec}`);
    }  else if (sec === 0) {
        console.log(`${hours}:${min}:00`);
    }  else {
        console.log("Некорректный ввод");
    }
}

// timeExpr(22, 1);

const timeArrow = (hours, min, sec) => {
    if ((hours >= 0 && hours <= 23) && (min >= 1 && min <= 59) && (sec >= 1 && sec <= 59)) {
        console.log(`${hours}:${min}:${sec}`);
    } else if (hours > 23) {
        console.log("Некорректный ввод");
    } else if (min === 0 && sec === 0) {
         console.log(`${hours}:00:00`);
    } else if (min === 0) {
        console.log(`${hours}:00:${sec}`);
    }  else if (sec === 0) {
        console.log(`${hours}:${min}:00`);
    }  else {
        console.log("Некорректный ввод");
    }
};

// timeArrow(25);

// Написать функцию, которая принимает часы, минуты и секунды и
// возвращает это время в секундах

function parseTimeDecl(hours, min, sec) {
    if (sec || sec === 0) {
        return (min * 60) + (hours * 60 * 60) + sec;
    } else if (min || min === 0) {
        return (min * 60) + (hours * 60 * 60);
    } else if (hours || hours === 0) {
        return (hours * 60 * 60);
    } else {
        return 'Некорректный ввод';
    }
}

// console.log(parseTimeDecl(2, 2, 50));

const parseTimeExpr = function(hours, min, sec) {
    if (sec || sec === 0) {
        return (min * 60) + (hours * 60 * 60) + sec;
    } else if (min || min === 0) {
        return (min * 60) + (hours * 60 * 60);
    } else if (hours || hours === 0) {
        return (hours * 60 * 60);
    } else {
        return 'Некорректный ввод';
    }
};

// console.log(parseTimeExpr(10,10,10));

const parseTimeArrow = (hours, min, sec) => {
    if (sec || sec === 0) {
        return (min * 60) + (hours * 60 * 60) + sec;
    } else if (min || min === 0) {
        return (min * 60) + (hours * 60 * 60);
    } else if (hours || hours === 0) {
        return (hours * 60 * 60);
    } else {
        return 'Некорректный ввод';
    }
};

// console.log(parseTimeArrow(25));


// Написать функцию, которая принимает количество секунд, переводит
// их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс». 

function parseSecDecl(sec) {
    if (sec && sec > 1) {
        let hours = Math.floor((sec / (60 * 60)) % 24);
        let minutes = Math.floor((sec /  60) % 60);
        let seconds = Math.floor(sec % 60);

        return `${hours}:${minutes}:${seconds}`;
    } else {
        return 'Некорректный ввод';
    }
}

// console.log(parseSecDecl());

const parseSecExpr = function(sec) {
    if (sec && sec > 1) {
        let hours = Math.floor((sec / (60 * 60)) % 24);
        let minutes = Math.floor((sec /  60) % 60);
        let seconds = Math.floor(sec % 60);

        return `${hours}:${minutes}:${seconds}`;
    } else {
        return 'Некорректный ввод';
    }
};

// console.log(parseSecExpr(7370));

const parseSecArrow = (sec) => {
    if (sec && sec >= 1) {
        let hours = Math.floor((sec / (60 * 60)) % 24);
        let minutes = Math.floor((sec /  60) % 60);
        let seconds = Math.floor(sec % 60);

        return `${hours}:${minutes}:${seconds}`;
    } else {
        return 'Некорректный ввод';
    }
};

// console.log(parseSecArrow());

// Написать функцию, которая считает разницу между датами. Функция
// принимает 6 параметров, которые описывают 2 даты, и возвращает
// результат в виде строки «чч:мм:сс». При выполнении задания используйте
// функции из предыдущих 2-х заданий: сначала обе даты переведите в
// секунды, узнайте разницу в секундах, а потом разницу переведите обратно в
// «чч:мм:сс».


const differenceDate = (hours1, min1, sec1, hours2, min2, sec2) => {
    let timeInSec1 = parseTimeExpr(hours1, min1, sec1);
    let timeInSec2 = parseTimeExpr(hours2, min2, sec2);
    let minTime = timeInSec1 >= timeInSec2 ? timeInSec2 : timeInSec1;
    let maxTime = timeInSec2 <= timeInSec1 ? timeInSec1 : timeInSec2;
    let difference;
    let date;

    difference = maxTime - minTime;

    if (difference === 0) {
        return `Разница между датами состовляет: 00:00:00`;
    } else if (difference > 0) {
        date = parseSecArrow(difference);
        return `Разница между датами состовляет: ${date}`;
    }
};

// console.log(differenceDate(15,10,11,10,10,11));