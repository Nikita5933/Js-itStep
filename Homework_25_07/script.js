'use strict';

// Random Array function

function getArray(num) {
    function randomNumber(min, max) {
        const r = Math.random() * (max - min + 1) + min
        return Math.floor(r)
    }

    let arr = new Array(num);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = randomNumber(-100, 100);
    }
    return arr;
}
let array = getArray(10);
console.log(array);

// 1 Дано некоторое число: 12345 Получите массив цифр этого числа (обратите внимание,
//   что дана не строка, а именно число)

const getArrayFromNum = num => {
    if (num < 0) {
        let arr = String(Math.abs(num)).split('');
        for(let i = 0; i < arr.length; i++) {
        arr[i] = Number('-' + arr[i]);
    }
    return arr;
    } else if (num > 0) {
        let arr = String(num).split('');
        for(let i = 0; i < arr.length; i++) {
        arr[i] =  Number(arr[i]);
    }
    return arr;
    } else {
        return 'Ошибка ввода';
    }
};

// console.log(getArrayFromNum(2134));

// 2 Дано некоторое число: 12345 Переверните его: 54321

const reverseNum = num => {
    let str = num.toString();
    let res = '';
    
    if (str[0] != '-') {
        for (let i = str.length; i > 0; i--) {
            res += str[i- 1];
        }
        return Number(res);
    } else {
        for (let i = str.length; i > 0; i--) {
            res += str[i- 1];
        }
        return Number('-' + res.substring(0, res.length - 1));
    }
};


console.log(reverseNum(23));

// 3 Дано некоторое число: 12345 Найдите сумму цифр этого числа.

const numToSum = num => {
    let arr = String(Math.abs(num)).split('');
    let res = 0;

    for (let item of arr) {
        res += +item;
    }
    return num > 0 ? res : Number('-' + res);
};

// console.log(numToSum(12345));

// 4 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

const upTenPerc = arr => {
    let newArr = [];

    for(let item of arr) {
        let percent = item * 0.1 + item;
        Number.isInteger(percent) ? newArr.push(percent): newArr.push((percent).toFixed(1)); // Оставляет 1 знак после запятой и не добавляет десятичный ноль(33.0)
    }
    return newArr;
};

// console.log(upTenPerc(array));

// 5 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
//   По очереди выведите в консоль подмассивы из двух элементов нашего массива:
//   [1, 2]
//   [3, 4]
//   [5, 6]

const twoItemmArr = arr => {
    if (arr.length % 2 === 0) {
        for (let i = 0;  i < arr.length; i+=2) {
            let nArr = [];
            nArr.push(arr[i]);
            nArr.push(arr[i+1]);
            console.log(nArr);
        }
    } else {
        for (let i = 0;  i < arr.length; i+=2) {
            let nArr = [];
            if(i === arr.length - 1) {
                nArr.push(arr[i]);
                console.log(nArr);
                break;
            }
            nArr.push(arr[i]);
            nArr.push(arr[i+1]);
            console.log(nArr);
    }
}
};

// twoItemmArr(array);

// 6 Дана строка. Показать номера символов, совпадающих с последним
//  символом строки.

const findLastSymb = str => {
    let index = '';
    for (let i = 0; i < str.length - 1; i++) {
        if(str[i] === str[str.length - 1]) {
            index += i + ' ';
        }
    }
    if(str && index !== '') {
        console.log(`Номера индесков совпадающий с последним символом: ${index.trim().replaceAll(' ', ',')}`);
    } else {
        console.log('Совпадений не найдено');
    }
   
};

// findLastSymb('fdsjfhsdjf fjkdshfi sakfhsd fdf');

// 7 Дана строка. Если ее длина больше 10, то оставить в строке только первые
//   6 символов, иначе дополнить строку символами 'o' до длины 12.

let str = '';

if (str.length > 10) {
    str = str.substring(0,6);
} else {
    let nStr = '';
    for (let i = str.length; i < 12; i++) {
    nStr += 'o';
}
str += nStr;
}

// console.log(str);