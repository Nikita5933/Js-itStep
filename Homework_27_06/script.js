'use strict';

// Запросить у пользователя число и вывести все делители этого числа.


function dividers(num) {
    let result = 1 + " ";
    if (num === 1 || num <= 0 || typeof num == 'string') {
        return result = 'Непрвавильный ввод';
        
       }
    for(let i = 2; i <= num; i++) {
        if (num % i === 0) {
            result += i + ' ';
        }
    }
    return `Все делители числа ${num}: ${result}`;
}
console.log(dividers(6));

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

function discount(sum) {
    if (sum >= 200 && sum < 300) {
        return `Ваша скидка 3% , сумма к оплате со скидкой: ${sum - (sum * 0.03)}`;
    } else if (sum >= 300 && sum < 500) {
        return `Ваша скидка 5% , сумма к оплате со скидкой: ${sum - (sum * 0.05)}`;
    } else if (sum >= 500) {
        return `Ваша скидка 7% , сумма к оплате со скидкой: ${sum - (sum * 0.07)}`;
    } else {
        return "Некорректный ввод";
        }
}
console.log(discount(299));

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За
// каждый правильный ответ начисляется 2 балла. После вопросов выведите
// пользователю количество набранных баллов.

function test() {
    let scores = 0;
    for (;;) {
        let test1 = prompt("В каком году произошли терракты 11 Сентября? Введите правильный вариант ответа ( а) 2000, б) 2001, в) 2003 )");
        let test2 = prompt("Телефонный код Беларуси? Введите правильный вариант ответа ( а) +375, б) +7, в) +380 )");
        let test3 = prompt("Столица Китая? Введите правильный вариант ответа ( а) Шанхай, б) Пекин, в) Минск )");
        
         if(test1 && test2 && test3) {
            if (test1.charAt(0) == "б") {
                scores  += 2;
            } 
            if (test2.charAt(0) == 'a' || test2.charAt(0) =='а') {
                scores  += 2;
            }
             if (test3.charAt(0) == "б") {
                scores  += 2;
            }
            return alert(`Ваш результат: ${scores} балла(ов)`);
        }
       
    }
}

test();

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите
// возможность перехода на следующий месяц, год, а также високосный год.

function nextDate(year, month, day) {

    if(Number.isInteger(+year) && Number.isInteger(+month) && Number.isInteger(+day)) {
        function leapYear(year) {
            if ((year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)) && year >= 0 && year <= 9999) {
                return false;  
            } else if ((!(year % 4 != 0 || (year % 100 == 0 && year % 400 != 0))) && year >= 0 && year <= 9999) {
                return true;
            }
        }
        let isLeapYear = leapYear(year);
        let newYear = year;
        let newMonth = month;
        let newDay = day;
    
        switch (month) {
            case 1:
                if (day >= 1 && day <= 30) {
                    newDay += 1;
                } else if (day == 31) {
                    newDay = 1;
                    newMonth +=1;
                } else {
                    newDay = 'Неправильный день';
                }
                break;
            case 2:
                if(isLeapYear) {
                    if (day >= 1 && day <= 28) {
                        newDay += 1;
                    } else if (day == 29) {
                        newDay = 1;
                        newMonth +=1;
                    } else {
                        newDay = 'Неправильный день';
                    }
                } else {
                    if (day >= 1 && day <= 27) {
                        newDay += 1;
                    } else if (day == 28) {
                        newDay = 1;
                        newMonth +=1;
                    } else {
                        newDay = 'Неправильный день';
                    }
                }
                break;
            case 3:
                if (day >= 1 && day <= 30) {
                    newDay += 1;
                } else if (day == 31) {
                    newDay = 1;
                    newMonth +=1;
                } else {
                    newDay = 'Неправильный день';
                }
                break;
            case 4:
                if (day >= 1 && day <= 29) {
                    newDay += 1;
                } else if (day == 30) {
                    newDay = 1;
                    newMonth +=1;
                } else {
                    newDay = 'Неправильный день';
                }
                break;
            case 5:
                if (day >= 1 && day <= 30) {
                    newDay += 1;
                } else if (day == 31) {
                    newDay = 1;
                    newMonth +=1;
                } else {
                    newDay = 'Неправильный день';
                }
                break;
            case 6:
                if (day >= 1 && day <= 29) {
                    newDay += 1;
                } else if (day == 30) {
                    newDay = 1;
                    newMonth +=1;
                } else {
                    newDay = 'Неправильный день';
                }
                break;
            case 7:
                if (day >= 1 && day <= 30) {
                    newDay += 1;
                } else if (day == 31) {
                    newDay = 1;
                    newMonth +=1;
                } else {
                    newDay = 'Неправильный день';
                }
                break;
            case 8:
                if (day >= 1 && day <= 30) {
                    newDay += 1;
                } else if (day == 31) {
                    newDay = 1;
                    newMonth +=1;
                } else {
                    newDay = 'Неправильный день';
                }
                break;
            case 9:
                if (day >= 1 && day <= 29) {
                    newDay += 1;
                } else if (day == 30) {
                    newDay = 1;
                    newMonth +=1;
                } else {
                    newDay = 'Неправильный день';
                }
                break;
            case 10:
                if (day >= 1 && day <= 30) {
                    newDay += 1;
                } else if (day == 31) {
                    newDay = 1;
                    newMonth +=1;
                } else {
                    newDay = 'Неправильный день';
                }
                break;
            case 11:
                if (day >= 1 && day <= 29) {
                    newDay += 1;
                } else if (day == 30) {
                    newDay = 1;
                    newMonth +=1;
                } else {
                    newDay = 'Неправильный день';
                }
                break;
            case 12:
                if (day >= 1 && day <= 30) {
                    newDay += 1;
                } else if (day == 31) {
                    newDay = 1;
                    newMonth = 1;
                    newYear += 1;
                } else {
                    newDay = 'Неправильный день';
                }
                break;
            default:
                newMonth = 'Неправильный месяц';
        }
    return `Ваша следующая дата: ${newYear}-${newMonth}-${newDay}`; 
    }
    return "Неравильный ввод";

  
}

console.log(nextDate(2024,1,23));

// Объявить две переменные a и b и задать им целочисленные произвольные
// начальные значения. Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - если а и b разных знаков, вывести их сумму;

function fromAtoB() {
    let a = 22;
    let b = 12;

    if (a >= 0 && b >= 0) {
        if (a > b) {
            return a - b;
        } else {
            return b - a;
        }
    } else if (a < 0 && b < 0) {
        return a * b;
    } else if ((a >=0 && b < 0) || (a < 0 && b >=0)) {
        return a + b;
    }  else {
        return "Некорректные данные";
    }
}

console.log(fromAtoB());

// Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с
// двумя параметрами. Т.е. например, функция для сложения должна принимать
// два числа, складывать их и возвращать результат. Обязательно использовать
// оператор return.

function summ(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function multiplication(a, b) {
    return a * b;
}

console.log(summ(10, 20))
console.log(difference(10, 20))
console.log(division(10, 20))
console.log(multiplication(10, 20))


// Есть две команды по гимнастике, дельфины (Dolphins) и коалы (Koalas). Они
// соревнуются друг с другом 3 раза. Победитель с наибольшим средним баллом
// выигрывает приз!
// Ваши задачи:
// - Рассчитайте средний балл для каждой команды, используя приведенные ниже
// данные теста
// - Сравните средние баллы команды, чтобы определить победителя
// соревнования, и выведите его на консоль. Не забывайте, что может быть ничья,
// поэтому проверьте и это (ничья означает, что у них одинаковый средний балл).
// Доп. условие 1: включите требование о минимальном количестве баллов 100. С
// помощью этого условия команда выигрывает только в том случае, если у нее
// больше очков, чем у другой команды, и в то же время она набрала не менее 100
// очков.
// Доп. условие 2: Минимальный балл также приравнивается к ничьей! Таким
// образом, ничья происходит только в том случае, если обе команды набрали
// одинаковое количество очков и обе набрали больше или равно 100 очкам. В
// противном случае ни одна команда не выиграет приз.
// Тестовые данные:
// Данные 1: Дельфины набрали 96, 108 и 89 баллов. Коалы набирают 88, 91 и 110
// баллов
// Данные 2: Дельфины набрали 97, 112 и 101 балл. Коалы набрали 109, 95 и 123
// балла
// Данные 3: Дельфины набрали 97, 112 и 101 балл. Коалы набрали 109, 95 и 106
// баллов

function teamWinner(team1score1, team1score2, team1score3, team2score1, team2score2, team2score3) {
    let mediumScoreTeam1 = (team1score1 + team1score2 + team1score3) / 3;
    let mediumScoreTeam2 = (team2score1 + team2score2 + team2score3) / 3;

    if (mediumScoreTeam1 > mediumScoreTeam2 && mediumScoreTeam1 >= 100) {
        console.log(`Победили Дельфины! со средним баллом ${mediumScoreTeam1}`);
    } else if (mediumScoreTeam1 < mediumScoreTeam2 && mediumScoreTeam2 >= 100) {
        console.log(`Победили Коалы! со средним баллом ${mediumScoreTeam2}`);
    } else if ((mediumScoreTeam1 === mediumScoreTeam2) && mediumScoreTeam1 >= 100 && mediumScoreTeam2 >= 100){
        console.log('Ничья!!!');
    } else {
        console.log("Обе команды проиграли!");
    }
}

teamWinner(96,108,89,88,91,110);
teamWinner(97,112,101,109,95,123);
teamWinner(97,112,101,109,95,106);


// Стивен хочет создать очень простой калькулятор чаевых для тех случаев, когда
// он ходит обедать в ресторан. В его стране обычно дают чаевые в размере 15%,
// если стоимость счета составляет от 50 до 300. Если значение отличается, то
// чаевые составляют 20%.
// Ваши задачи:
// - Рассчитайте чаевые в зависимости от стоимости счета. Создайте для этого
// переменную под названием "подсказка" (tip).
// - Не разрешается использовать оператор if / else (Если вам так проще, вы
// можете начать с оператора if / else, а затем попытаться преобразовать его в
// тернарный оператор! Луше если не будете использовать помощь WebStorm по
// преобразованию if/else в тернарный оператор)
// - Выведите на консоль строку, содержащую стоимость счета, чаевые и конечную
// стоимость (счет + чаевые). Пример: “Счет составил 275 долларов, чаевые
// составили 41,25 доллара, а общая стоимость 316.25”
// Тестовые данные:
// Данные 1: Тест на номиналы банкнот 275, 40 и 430

function tipsCalc(summ) {
    let tip15 = summ * 0.15;
    let tip20 = summ * 0.2;
    
    summ >= 50 && summ <= 300 ? console.log(`Счет составил ${summ} долларов, чаевые составили ${tip15} доллара, а общая стоимость ${summ + tip15}`):
    (summ < 50 && summ > 0) || summ > 300 ? console.log(`Счет составил ${summ} долларов, чаевые составили ${tip20} доллара, а общая стоимость ${summ + tip20}`):
    summ <= 0 ? console.log("Некорректные данные"): console.log("Некорректные данные")
}

tipsCalc(275);
tipsCalc(40);
tipsCalc(430);