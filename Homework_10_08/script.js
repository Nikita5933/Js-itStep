'use strict';

// 1 Напишите функцию, которая принимает два аргумента и возвращает все числа,
//   которые делятся на данный делитель. Первый аргумент - это массив чисел, а
//   второй - делитель.

const divisibleBy = (numbers, divisor) => {
    return numbers.filter(item => item % divisor === 0);
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6,423,4,52,345,6,436,87467,54,8,648,65,8,5234,8,89,0,8], 2));

// 2 Создание массива значений Фаренгейта из массива значений Цельсия:

let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

const fahrenheit = celsius.map(item => (item * (9/5)) + 32);

console.log(fahrenheit);

// 3 Дана некоторая строка:
//   'abcde abcde abcde'
//   Замените в ней первый символ каждого слова на '!':
//   '!bcde !bcde !bcde'

function replaceFirstChar(str) {
    return str.split(' ').map(item => '!' + item.slice(1, item.length));
}

console.log(replaceFirstChar('fsfgergy rehgttryrt 43 gdfgggfdg54t ty54dfg 365rg dfgdf 1g ojbjnvj greugh'));

// 4 Дан массив с числами:
//   [1, 2, 3, 3, 4, 5]
//   Проверьте, что в этом массиве есть два одинаковых элемента подряд.

function findPairElem (arr) { 
    return arr.map((item, index) => item === arr[index + 1] ? true: false).includes(true) ? console.log('Есть два одинаковых элемента подряд') : console.log('Нет одинаковых элементов подряд');
}

findPairElem(['elem1','elem2','elem3','elem4','elem5']);

// 5 В цепочках ДНК символы «A» и «T» дополняют друг друга, как «C» и «G». У вас
//   есть функция с половиной ДНК; вам нужно получить вторую половину. Нить ДНК
//   никогда не бывает пустой.
//   Input: строка заглавных латинских букв (A, T, C, G)
//   Output: строка заглавных латинских букв
//   DNAStrand ("ATTGC") // return "TAACG"
//   DNAStrand ("GTAT") // return "CATA"
//   Пример входных данных
//   Ожидаемый результат
//   DNAStrand("AAAA")
//   'TTTT'
//   DNAStrand("ATTGC")
//   'TAACG'
//   DNAStrand("GTAT")
//   'CATA'

function getDNAStrand(str) {
    return str.split('').map(item => {
        switch(item) {
            case 'A':
                return 'T';
            case 'T':
                return 'A';
            case 'C':
                return 'G';
            case 'G':
                return 'C';
        }
    }).join('');
}

console.log(getDNAStrand('ATTGC'));