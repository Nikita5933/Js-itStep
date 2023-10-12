'use strict';

function Car (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`Скорость увеличена на 10 км/ч, текущая скорость: ${this.speed} км/ч`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`Скорость уменьшена на 5 км/ч, текущая скорость: ${this.speed} км/ч`);
}
//////////////////////////////////////////////////////////////////////////////////////////////////

// 1.1 Используйте функцию конструктор для реализации электромобиля (называемого "EV")
//     в качестве дочернего класса "Car", т.е. EV строится на основании Car. Помимо марки
//     и текущей скорости, "EV" также имеет текущий заряд батареи в % (свойство "charge").

function EV (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// 1.2  Реализуйте метод 'chargeBattery', который принимает аргумент "chargeTo"
//      и устанавливает зарядное устройство "charge" в это положение.

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

// 1.3  Внедрите метод "accelerate", который увеличит скорость автомобиля на 20
//      и уменьшит заряд на 1%. Затем запишите сообщение подобного содержания:
//      "Tesla едет со скоростью 140 км/ч, заряд составляет 22%".

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} едет со скоростью ${this.speed} км/ч, заряд составляет ${this.charge}%`)
}

// 1.4 Создайте объект электромобиля и поэкспериментируйте с вызовами " accelerate",
//     "brake" и " chargeBattery" (заряд до 90%).

const tesl = new EV('Tesla', 120, 23);

// tesl.accelerate()
// tesl.accelerate()
// tesl.accelerate()
// tesl.brake();
// tesl.brake();
// tesl.chargeBattery(90);
// console.dir(tesl)


////////////////////////////////////////////////////////////////////////////////////////////////

class CarCL {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`Скорость увеличена на 10 км/ч, текущая скорость: ${this.speed} км/ч`);
    }
    brake() {
        this.speed -= 5;
        console.log(`Скорость уменьшена на 5 км/ч, текущая скорость: ${this.speed} км/ч`);
        return this; // 2.3 Chain pattern
    }
    get speedUS() {
        return (this.speed / 1.6)
    }
    set speedUS(speedMpH) {
        this.speed = (speedMpH * 1.6);
    }
}
////////////////////////////////////////////////////////////////////////////

// 2.1 Повторите задачу № 1, но на этот раз с использованием классов ES6: создайте
// дочерний класс 'EVCl' класса 'CarCl'


class EVCL extends CarCL {
    #charge; // Make private
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this; // 2.3 Chain pattern
    }
    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} едет со скоростью ${this.speed} км/ч, заряд составляет ${this.#charge}%`);
        return this; // 2.3 Chain pattern
    }
}

const rivian = new EVCL('Rivian', 120, 23);

rivian.accelerate();
rivian.brake();
rivian.speedUS = 80;
console.log(rivian);
rivian.chargeBattery(90);
console.dir(rivian.chrge)


///////////////////////////////
// 2.3 Chain pattern
console.log('/////////////////////////////////////')
rivian.accelerate().chargeBattery(66).accelerate().chargeBattery(50).accelerate().brake().brake().chargeBattery(77).accelerate().brake();