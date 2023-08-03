'use strict';

// Задание: Вы вводите число N для промежутка [0..N]. Ваша программа должна как можно быстрее найти 
// все простые числа из указанного промежутка. В чат сбрасывайте свои достижения: какое значение N 
// вы ввели и сколько времени потратила ваша программа на поиск решения.

//Decorator
function getTime(func) {
    return function (x) {
        let timeStart = new Date();
        func(x);
        console.log(`Время выполнения = ${new Date() - timeStart}`);
    }
}
findNumbers = getTime(findNumbers);

////  Функция, в которой вы пишите свой код
function findNumbers(n) {
  let arr = [];
  let str = '';
    for (let i = n; i > 1; i--) {
        for (let j = 0,count = 0; j < i; j++) {
            if (i % j !== 0) {
                count++;
            } 
            if (count === i - 1) {
                // arr.push(i);
                str += i = ' '
                break;
            }
        }
    }
    return str;

}
// let sn = findNumbers(50);
// console.log(sn);


const num = +prompt("Введите конечное значение промежутка [0..n]");
findNumbers(num);
console.log(`Значение N = ${num}`);