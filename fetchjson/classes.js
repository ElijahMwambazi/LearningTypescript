"use strict";
class Vehicle {
    constructor(color) {
        this.color = color;
        this.brakes = function () {
            return false;
        };
        this.lights = function () {
            return true;
        };
        this.drive = function () {
            console.log("vroom vroom");
        };
        this.honk = function () {
            console.log("beep beep");
        };
        this.accessDrive = function () {
            this.drive();
        };
        this.accessHonkV = function () {
            this.honk();
        };
    }
}
class Car extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
        this.lights = function () {
            return false;
        };
        this.accessHonkC = function () {
            this.honk();
        };
    }
}
const vehicle = new Vehicle("orange");
console.log(vehicle.brakes);
console.log(vehicle.lights);
console.log(vehicle.accessDrive);
console.log(vehicle.accessHonkV);
console.log(">>>---------o---------<<<");
const car = new Car(5, "green");
console.log(car.brakes);
console.log(car.lights);
console.log(car.accessDrive);
console.log(car.accessHonkV);
console.log(car.accessHonkC);
