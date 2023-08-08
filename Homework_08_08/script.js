'use strict';

// 1 Создать объект, описывающий автомобиль (производитель,
//   модель, год выпуска, средняя скорость), и следующие функции для работы с
//   этим объектом.
//   1. Функция для вывода на экран информации об автомобиле.
//   2. Функция для подсчета необходимого времени для преодоления
//   переданного расстояния со средней скоростью. Учтите, что через
//   каждые 4 часа дороги водителю необходимо делать перерыв на 1 час. 

const vehicle = {
    brand: 'Opel',
    model: 'Vectra',
    year: 2010,
    avarageSpeedKm: 80,
    info: function() {
        console.log(`
Производитель: ${this.brand},
Модель автомобиля: ${this.model},
Год выпуска: ${this.year},
Средняя скорость в км/ч: ${this.avarageSpeedKm}.`);
    },
    durationTime: function(distance) {
        const timeHour = distance / this.avarageSpeedKm;
        const timeMin = Math.round((timeHour - Math.floor(timeHour)) * 60);
        const breaks = Math.floor(timeHour / 4);

        if (timeHour <= 4 && timeHour > 0) {
            console.log(`Автомобиль проедёт расстояние: ${distance} км за ${Math.floor(timeHour)} час(а) и ${timeMin} минут(ы).`);
        } else if (timeHour > 4) {
            console.log(`Автомобиль проедёт расстояние: ${distance} км за ${Math.floor(timeHour) + breaks} часа(ов) и ${timeMin} минут(ы), с перерывом(вами) на ${breaks} час(а).`);
        } else {
            console.log('Ошибка ввода');
        }
    }
};

vehicle.info();
vehicle.durationTime(321);

// 2 Создать объект, хранящий в себе отдельно числитель и
//   знаменатель дроби, и следующие функции для работы с этим объектом.
//      1. Функция сложения 2-х объектов-дробей.
//      2. Функция вычитания 2-х объектов-дробей.
//      3. Функция умножения 2-х объектов-дробей.
//      4. Функция деления 2-х объектов-дробей.
//      5. Функция сокращения объекта-дроби.


const obj1 = {
    numerator: 1,
    denominator: 24
}
const obj2 = {
    numerator: 2,
    denominator: 10
}
function sumObj(obj1, obj2) {
    const object1 = reduction(obj1);
    const object2 = reduction(obj2);
    return reduction({
        numerator: object1.numerator * object2.denominator + object2.numerator * object2.denominator,
        denominator: object1.denominator * object2.denominator
    })
}

function subtractionObj(obj1, obj2) {
    const object1 = reduction(obj1);
    const object2 = reduction(obj2);
    return reduction({
        numerator: obj1.numerator * obj2.denominator - obj2.numerator * obj1.denominator,
        denominator: obj1.denominator * obj2.denominator
    })
}

console.log(divisionObj(obj2,obj1))
function multiplicationObj(obj1, obj2) {
    return reduction({
        numerator: obj1.numerator * obj2.numerator,
        denominator: obj1.denominator * obj2.denominator
    })
}
function divisionObj(obj1, obj2) {
    return reduction({
        numerator: obj1.denominator * obj2.numerator,
        denominator: obj1.numerator * obj2.denominator
    })
}


function reduction(obj) {
        let num = obj.numerator;
        let den = obj.denominator;
        let variableGCD;
        while (den) {
            variableGCD = num % den;
            num = den;
            den = variableGCD;
        }
        return {
                numerator: obj.numerator / num,
                denominator: obj.denominator / num
    };
}
console.log(sumObj(obj1, obj2));
console.log(subtractionObj(obj1, obj2));
console.log(multiplicationObj(obj1, obj2));
console.log(divisionObj(obj1, obj2));
console.log(reduction(obj2));




// 3 Создать массив «Список покупок». Каждый элемент массива
//   является объектом, который содержит название продукта, необходимое
//   количество и куплен или нет. Написать несколько функций для работы с таким
//   массивом.
//      1. Вывод всего списка на экран таким образом, чтобы сначала шли
//      некупленные продукты, а потом – купленные.
//      2. Добавление покупки в список. Учтите, что при добавлении покупки с
//      уже существующим в списке продуктом, необходимо увеличивать
//      количество в существующей покупке, а не добавлять новую.
//      3. Покупка продукта. Функция принимает название продукта и отмечает
//      его как купленный.

const shoppingList = [
    {
        productName: 'Soap',
        needsToBuy: 3,
        purchaseStatus: false
    },
    {
        productName: 'Tooth paste',
        needsToBuy: 1,
        purchaseStatus: true
    },
    {
        productName: 'Tooth brush',
        needsToBuy: 2,
        purchaseStatus: false
    },
    {
        productName: 'Shower gel',
        needsToBuy: 2,
        purchaseStatus: false
    },
    {
        productName: 'Shampoo',
        needsToBuy: 4,
        purchaseStatus: true
    }
];

function sortedList(arr) {
    let nArr = [...arr]
        for (let i = 0; i < nArr.length - 1; i++) {
            for (let j = i + 1; j < nArr.length; j++)
                    if (nArr[i]["purchaseStatus"]) {
                        let data = nArr[i];
                        nArr[i] = nArr[j];
                        nArr[j] = data;
                    }
                }
    console.log(nArr);
}

sortedList(shoppingList)

function addItem(arr, obj) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (obj['productName'] === arr[i]['productName']) {
            arr[i]['needsToBuy'] += obj['needsToBuy'];
            arr[i]['purchaseStatus'] = false;
            console.log('Увеличено количество продукта!');
            flag = true;
            break;
        } else {
            flag = false;
        }
       
    }
    if (flag === false) {
        arr.push(obj);
        console.log('Продукт добавлен!');
    }
}


addItem(shoppingList,{
    productName: 'Tooth paste',
    needsToBuy: 4,
    purchaseStatus: false
});

console.log(shoppingList);

function buyItem(arr, name) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]["productName"] === name && arr[i]['purchaseStatus'] === false) {
            arr[i]['purchaseStatus'] = true
            console.log('Продукт куплен!');
            flag = true;
            break;
        } else {
            flag = false;
        }
       
    }
    if (flag === false) {
        console.log('Продукт не найден или уже куплен!');
    }
}
console.log(shoppingList);
buyItem(shoppingList,'Tooth brush')
console.log(shoppingList);