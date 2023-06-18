'use strict';

// 1

// let userAge = +prompt("Введите ваш возраст");

// if (userAge >= 0 && userAge <= 2) {
//     alert("Вы ребёнок!");
// } else if (userAge >= 3 && userAge <= 11) {
//     alert("Вам до 12 лет!");
// } else if (userAge >= 12 && userAge <= 18) {
//     alert("Вы подросток!");
// } else if (userAge >= 19 && userAge <= 60) {
//     alert("Вы взрослый!");
// } else if (userAge >= 61) {
//     alert("Вы пенсионер!");
// } else {
//     alert('Некорректные данные!');
// }

// 2

// let userNumber = +prompt('Введите чисто от 0 до 9');

// switch (userNumber) {
//     case 1:
//         alert("Ваш спецсимвол: !");
//         break;
//     case 2:
//         alert("Ваш спецсимвол: @");
//         break;
//     case 3:
//         alert("Ваш спецсимвол: #");
//         break;
//     case 4:
//         alert("Ваш спецсимвол: $");
//         break;
//     case 5:
//         alert("Ваш спецсимвол: %");
//         break;
//     case 6:
//         alert("Ваш спецсимвол: ^");
//         break;
//     case 7:
//         alert("Ваш спецсимвол: &");
//         break;
//     case 8:
//         alert("Ваш спецсимвол: *");
//         break;
//     case 9:
//         alert("Ваш спецсимвол: (");
//         break;
//     case 0:
//         alert("Ваш спецсимвол: )");
//         break;
//     default:
//         alert('Некорректные данные');
// }

// 3

// let userNum = +prompt("Введите трёхзначное число в формате ХХХ"),
//     number1 = Math.floor(userNum / 100),
//     number2 = Math.floor((userNum / 10) % 10),
//     number3 = Math.floor(userNum % 10);

// if((number1 == number2 || number2 == number3 || number1 == number3) && userNum >= 100 && userNum <= 999) {
//     alert('Найдено совпадение цифр');
// } else if((!(number1 == number2 || number2 == number3 || number1 == number3) && userNum >= 100 && userNum <= 999)) {
//     alert('Совпадений не найдено');
// } else {
//     alert('Некорректные данные');
// }

// 4 

// let userYear = +prompt("Введите год, который хотите проверить");

// if ((userYear % 4 != 0 || (userYear % 100 == 0 && userYear % 400 != 0)) && userYear >= 0 && userYear <= 9999) {
//     alert('Год обычный');   
// } else if ((!(userYear % 4 != 0 || (userYear % 100 == 0 && userYear % 400 != 0))) && userYear >= 0 && userYear <= 9999) {
//     alert('Год високосный');
// } else {
//     alert('Некорректные данные');
// }

// 5 

let massMark = 78, 
    heightMark = 1.69, 
    massJohn = 92, 
    heightJohn = 1.95, 
    bmiMark = (massMark / heightMark ** 2).toFixed(1),
    bmiJohn = (massJohn / heightJohn ** 2).toFixed(1),
    markHigherBMI,
    higherBMI;

// massMark = 96;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;
// bmiMark = (massMark / heightMark ** 2).toFixed(1);
// bmiJohn = (massJohn / heightJohn ** 2).toFixed(1);

if (bmiMark > bmiJohn) {
    higherBMI = `BMI Марка (${bmiMark}) выше, чем у Джона (${bmiJohn})!`;
    markHigherBMI = true;
} else if (bmiMark < bmiJohn) {
    higherBMI = `BMI Джона (${bmiJohn}) выше, чем у Марка (${bmiMark})!`;
    markHigherBMI = false
} else if (bmiMark === bmiJohn) {
    higherBMI = `BMI Марка (${bmiMark}) равен BMI Джона (${bmiJohn})`;
} else {
    higherBMI = 'Введены неправильные данные';
}

console.log(higherBMI);
console.log(markHigherBMI);

