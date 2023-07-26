'use strict';

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел
// положительных, отрицательных и нулей. При этом также посчитать, сколько
// четных и нечетных. Вывести статистику на экран. 

let i = 1;
let result;
let plus = 0;
let minus = 0;
let zero = 0;
let odd = 0;
let even = 0;

while (i <= 10) {
    result = +prompt("Введите число");
    result > 0 ? plus++ : result < 0 ? minus++ : zero++;
    result % 2 === 0 ? even++ : odd++;
    i++;
}
alert(`Ваша статистика: положительный: ${plus}, отрицательных: ${minus}, нулей: ${zero}, чётных: ${even}, нечётных: ${odd}.`);


// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить
// пример, вывести результат и спросить, хочет ли он решить еще один пример. И
// так до тех пор, пока пользователь не откажется.

let repeat;

do {
    let number1 = +prompt('Введите число 1');
    let operator = prompt('Введите знак (+, -, /, *)');
    let number2 = +prompt('Введите число 2');
    let result;

    switch(operator) {
        case '+':
            result = number1 + number2;
            if (Number.isNaN(result)) { // Проверка на ввод чисел, а не (2gu)
                alert("Вы неправильно ввели числа!")
            } else if (!Number.isInteger(result)) { 
                alert(`Ответ: ${result.toFixed(1)}`); // Убираю проблему с 0.1 + 0.2
            } else {
                alert(`Ответ: ${result}`);
            }
            break;
        case '-':
            result = number1 - number2;
            if (Number.isNaN(result)) {
                alert("Вы неправильно ввели числа!")
            } else if (!Number.isInteger(result)) {
                alert(`Ответ: ${result.toFixed(1)}`);
            } else {
                alert(`Ответ: ${result}`);
            }
            break;
        case '/':
            result = number1 / number2;
            if (Number.isNaN(result)) {
                alert("Вы неправильно ввели числа!")
            } else if (!Number.isInteger(result)) {
                alert(`Ответ: ${result.toFixed(1)}`);
            } else {
                alert(`Ответ: ${result}`);
            }
            break;
        case '*':
            result = number1 * number2;
            if (Number.isNaN(result)) {
                alert("Вы неправильно ввели числа!")
            } else if (!Number.isInteger(result)) {
                alert(`Ответ: ${result.toFixed(1)}`);
            } else {
                alert(`Ответ: ${result}`);
            }
            break;
        default:
            alert("Неправильный знак");
    }
    repeat = confirm("Хотите решить ещё пример?");
} while(repeat === true);


// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть
// следующий день?» и так до тех пор, пока пользователь нажимает OK. 

let weekAgree = true;
let weekIndex = 1;

do {
    switch (weekIndex) {
        case 1:
            weekAgree = confirm('Понедельник. Хотите увидеть следующий день?');
            weekIndex++;
            break;
        case 2:
            weekAgree = confirm('Вторник. Хотите увидеть следующий день?');
            weekIndex++;
            break;
        case 3:
            weekAgree = confirm('Среда. Хотите увидеть следующий день?');
            weekIndex++;
            break;
        case 4:
            weekAgree = confirm('Четверг. Хотите увидеть следующий день?');
            weekIndex++;
            break;
        case 5:
            weekAgree = confirm('Пятница. Хотите увидеть следующий день?');
            weekIndex++;
            break;
        case 6:
            weekAgree = confirm('Суббота. Хотите увидеть следующий день?');
            weekIndex++;
            break;
        case 7:
            weekAgree = confirm('Воскресенье. Хотите увидеть следующий день?');
            weekIndex = 1;
            break;
        default:
            alert("Что-то пошло не так");
    }
} while(weekAgree === true);

// Написать функцию, которая выводит все числа из заданного пользователем
// диапазона в прямом порядке. И еще одну функцию – для вывода в обратном
// порядке.

let userFirst = 10;
let userSecond = 20;

function numberOutput(first, second) {
    if (first >= second || second <= 0) {
        return "Неправильный диапозон";
        
    }
    while(second > first) {
        console.log(first);
        first++;
    }
    return userSecond;
}

console.log(numberOutput(userFirst, userSecond));

function numberOutputReverse(first, second) {
    if (first >= second || second <= 0) {
        return "Неправильный диапозон";
        
    }
    while(second > first) {
        console.log(second);
        second--;
    }
    return userFirst;
}

console.log(numberOutputReverse(userFirst, userSecond));


// Напишите программу на JavaScript, чтобы получить первые n чисел Фибоначчи.
// Примечание: Последовательность Фибоначчи - это последовательность чисел:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,... Каждое последующее число является суммой двух
// предыдущих.

function fibNumbers(num) {
    if (num <= 1) {
        return 0;
    }

    const summ = n => {
        let prev = 0;
        let next = 1;

        for(let i = 0; i < n; i++){
          next = prev + next;
          prev = next - prev;
        }
        num--;
        return prev;
      }

    let result = '';

    let j = 0;
    let k = num;
    while(k > j) {
        j++;
        result += summ(j - 1) + ', ';   
    }
    
    return result + '...';
}

console.log(fibNumbers(10));

// Напишите функцию JavaScript для вычисления множителей положительного
// целого числа.

function factors(n) {
    if (n <= 0) {
        return 0;
    }

    let result = '';
    let i = 0;

    while(n >= i) {
        if (n % i == 0) {
            result += i + ' '
            i++;
            continue;
        }
        i++;
        
    }
    return result;
}

console.log(factors(18));


// Найдите сумму всех целых нечетных чисел, всех целых четных чисел в
// промежутке от n до m. Результат вывести в формате:
// <сумма_четных_чисел – сумма_нечетных_чисел>

function summNumb(n, m) {
    let min = n >= m ? m : n;
    let max = m <= n ? n : m;
    let odd = 0;
    let even = 0;

    while(min <= max) {
        if (min % 2 === 0) {
            // console.log(min + ' even'); // Вывод в консоль для проверки правильности
            even += min;
            min++;
            continue;
        } else {
            // console.log(min + ' odd');
            odd += min;
            min++;
        }
    }

    return `<${even} - ${odd}>`;
    // return `<сумма четных чисел: ${even} – сумма нечетных чисел: ${odd}>` // Второй вариант вывода результата
}

console.log(summNumb(3, 9));