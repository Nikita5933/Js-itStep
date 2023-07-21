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

// 1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.

function sqSum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i] ** 2;
    }
    return res;
}

console.log(sqSum([1,2,3,4,5]));

// 2 Дан массив с числами. Найдите сумму квадратных корней элементов этого
//   массива.

function sqrtSum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            res = 'Отрицательные числа недопустимы';
            break;
        }
        res += Math.sqrt(arr[i]);
    }
    return res;
}

// console.log(sqrtSum([4,16,64,256,1024]));

// 3 Дан массив с числами. Найдите сумму положительных элементов этого
//   массива.

const sumOfPositive = arr => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            res += arr[i];
        }
    }
    return res;
};

// console.log(sumOfPositive(array));

// 4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые
//   больше нуля и меньше десяти.

function sumOfPositive2(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] > 0) && (arr[i] < 10)) {
            res += arr[i];
        }
    }
    return res;
}

// console.log(sumOfPositive2([1,2,11,1+2,9,0,-23,10]));

// 5 Напишите код, который преобразовывает и объединяет все элементы
//   массива в одно строковое значение. Элементы массива будут
//   разделены запятой.

function arrayToString(arr) {
    let res = '';
    for(let i = 0; i < arr.length; i++) {
        if(i === arr.length - 1) {
            res += arr[i];
            break;
        }
        res += arr[i] + ', ';
    }
    return res;
}

// console.log(arrayToString(['Moscow','Minsk','London']));

// 6 Найдите наименьший четный элемент массива. Если такого нет, то
//   выведите первый элемент.

const findMinEven = arr => {
    let min;
    let flagFirstElem = false;

    for (let i = 0; i < arr.length; i++) {
        if (!flagFirstElem && arr[i] % 2 === 0) {
            flagFirstElem = true;
            min = arr[i];
            continue;
        }
        if (flagFirstElem && arr[i] % 2 === 0 && min > arr[i]) {
            min = arr[i];
        }
    }
    return min = min ?? arr[0];
}

// console.log(findMinEven(array))

// 7 Найдите сумму номеров минимального и максимального элементов.

function sumNumArray(arr) {
    let min = arr[0];
    let max = arr[0];
    let indexMin = 0;
    let indexMax = 0;

    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
            indexMin = i;
        } else if (max < arr[i]) {
            max = arr[i];
            indexMax = i;
        }
    }
    return `Сумма индексов максимального и минимального числа: ${indexMax + indexMin}`;
}

// console.log(sumNumArray(array));
