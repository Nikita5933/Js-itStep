'use strict';

// Task №1

let userName = prompt('Введите ваше имя');
alert(`Привет, ${userName}!`);

// Task №2 

const currentYear = 2023;
let userAge = +prompt('Введите ваш год рождения в формате XXXX');
alert(`Вам сейчас: ${currentYear - userAge} лет( год(а) )`);

// Task №3

let squareWidth = +prompt('Введите длину стороны квадрата');
alert(`Периметр квадрата равен: ${squareWidth * 4}`);

// Task №4

let radiusCircle = +prompt('Введите радиус окружности');
const PI = Math.PI;
let squareCircle = Math.floor(PI * radiusCircle ** 2);
alert(`Площадь окружности: ${squareCircle}`);

// Task №5

let distanceBetweenCities = +prompt('Введите расстояние между двумя городами в км');
let duration = +prompt('За сколько часов вы хотите добраться?');
alert(`Чтобы успеть вовремя, вам необходимо двигаться со скорость: ${Math.floor(distanceBetweenCities / duration)} км/час`);

// Task №6

let userDollars = +prompt('Введите колличество долларов, которые хотите конвертировать в евро');
const euroPerDollar = 0.93;
alert(`${userDollars} доллара(ов) равно: ${userDollars * euroPerDollar} евро`);