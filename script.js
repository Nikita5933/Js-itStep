'use strict';

// 1

// let tempC = +prompt("Введите температуру в градусах по Цельсию");

//     if (tempC >= 0 || tempC < 0) {
//         alert(`Температура по Фаренгейту: ${Math.floor((9 / 5) * tempC + 32)}`);
//     } else {
//         alert('Введите корректные данные');
//     }


// 2

// let admin,
//     name;

// name = "Василий";
// admin = name;
// console.log(admin);

// 3 

// console.log(10 + 10 + "10"); //Сложил 10 и 10, получилось 20, потом преобразовал 20 в строку и прибавил строку 10, получилось 2010
// console.log(10 + "10" + 10); //Тут всё преобразовал в строки и вывел строку 101010
// console.log(10 + 10 + +"10"); //Унарный плюс преобразовал последнюю 10 в тип данных number, всё сложил и получилось 30
// console.log(10 / -0); //Тут пустую строку преобразовывает в минус ноль и делит 10 на -0(унарный минус), получает -infinity

// 4

// let a = 5;
// let b = a++ + 5; 
// let c = ++a + --b; 
// c -= 5; 
// a *=2; 

// console.log(a+b+c); // 14 + 9 + 11 = 34 (При первом расчёте получил 35 - не учёл --b и посчитал b как 10)

// 5

// let sumMoney = +prompt("Введите сумму денег в кошелке"),
//     costCh = +prompt("Введите цену за одну шоколадку"),
//     sumCh = Math.floor(sumMoney / costCh);

//     if (sumMoney > 0 && costCh > 0) {
//         alert(`Вы можете купить ${sumCh} шоколадок(ки)`);
//         alert(`Ваша сдача: ${(sumMoney - (sumCh * costCh)).toFixed(1)}`);
//     } else {
//         alert('Введены некорректные данные');
//     }

// 6 

// let userNumber = +prompt("Введите число для проверки чётности");

// if (userNumber % 2 == 0) {
//     if (userNumber <= 0 || userNumber > 0) {
//         alert('Число чётное!');
//     } else {
//         alert('Введите число!');
//     }
// } else {
//     if (userNumber <= 0 || userNumber > 0) {
//         alert('Число нечётное!');
//     } else {
//         alert('Введите число!');
//     }
// }

// 7

// let userReverse = +prompt("Введите трёхзначное число в формате ХХХ"),
//     result;

//     if (userReverse >= 100 && userReverse <= 999 && (userReverse % Math.floor(userReverse) == 0)) {
//         result = userReverse % 10 + '';
//         result += Math.floor((userReverse / 10) % 10);
//         result += Math.floor((userReverse / 100) % 10);
//         alert(`Число задом наперёд - ${result}`);
//     } else {
//         alert("Введите трёхзначное число в формате ХХХ");
//     }
