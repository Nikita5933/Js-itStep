'use strict';

// 1 Написать функцию, преобразующую число в объект. Передавая на вход число в
//   диапазоне [0, 999], мы должны получить на выходе объект, в котором в соответствующих
//   свойствах описаны разряды числа:
//   - единицы (в свойстве units)
//   - десятки (в свойстве tens)
//   - сотни (в свойстве hundereds)
//   Например, для числа 45 мы должны получить следующий объект:
//   {
//   units: 5, //это единицы
//   tens: 4, //это десятки
//   hundreds: 0, //это сотни
//   }
//   Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
//   необходимо выдать соответствующее сообщение с помощью console.log и вернуть
//   пустой объект.

function numToObj(num) {
    if (typeof num != 'number') {
        console.log('Передано не число, необходимо передавать именно число!');
        return {};
    } else if (!Number.isInteger(num)) {
        console.log('Передано не целое число!');
        return {};
    } else if (num >= 0 && num <= 999) {
        return {
            units: `${Math.floor(num % 10)}`,
            tens: `${Math.floor(num % 100 / 10)}`,
            hundreds: `${Math.floor(num / 100)}`
        }
    } else {
        console.log('Неправильный диапазон!');
        return {};
    }
}

console.log(numToObj(987));

// 2 Функция принимает на вход массив вида:
//   Const animal = [[“typeName”, “jaguar”], [“speed”, 80], [“weight”, 80], [“height”, 75],
//   [“gender”, “male”], [“yearOfBirth”, 4] ]
//   Результат работы функции: объект, в котором ключом является первый элемент из пар
//   значений, а второй элемент его значением. Напр. [[“building”, “home”]] => {building:
//   “home”} – данный массив содержит одну пару ключ-значение, т.о. на выходе объект,
//   только с одним свойством. В вашем случае будет объект с несколькими свойствами.

function getObjFromArray(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i][0]] = arr[i][1];
    }
    return obj;
}

const animal = [['typeName', 'jaguar'], ['speed', 80], ['weight', 80], ['height', 75],['gender', 'male'], ['yearOfBirth', 4]];

console.log(getObjFromArray(animal));

// 3 Реализовать функцию, осуществляющую обратное, заданию 2, преобразование, т.е.
//   из объекта в массив, каждый элемент которого это массив из двух значений [ключ объекта,
//   значение ключа].

function getArrayFromObj(obj) {
    const arr = [];
    for (let item in obj) {
        arr.push([item, obj[item]]);
    }
    return arr;
}

console.log(getArrayFromObj(getObjFromArray(animal)));