'use strict';

// 1

function compare(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else if (num1 == num2) {
        return 0;
    } else {
        console.log('Некорректные данные');
    }
}
// console.log(compare(2,"2"));

// 2

const factorial = function(num) {
    if (num == 0) {
        return 1;
    } else if (num > 0) {
        return num * factorial(num - 1);
    } else {
        return "Некорректные ввод";
    }
};

// console.log(factorial(5));

// 3 

function concate(num1, num2, num3) {
    if((num1 >=0 && num2 >=0 && num3 >=0) && Number.isInteger(+num1) && Number.isInteger(+num2) && Number.isInteger(+num3)) {
        return +(num1 + '' + num2 + "" + num3);  
    } else {
        return "Некорректные ввод";
    }

}

// console.log(concate(2,3,5));

function square(lenghtParam = 0, widthParam = 0) {
    if (lenghtParam != 0 && widthParam != 0) {
        return lenghtParam * widthParam;
    } else if(lenghtParam == 0 && widthParam != 0) {
        return widthParam * widthParam;
    } else if (lenghtParam != 0 && widthParam == 0) {
        return lenghtParam * lenghtParam;
    } else {
        return 'Ошибка ввода';
    }
}

console.log(square(4, 5));