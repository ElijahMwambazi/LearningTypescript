"use strict";
const oldCivic = {
    Name: "civic",
    year: 2000,
    broken: true,
    summary: function () {
        return `${this.broken ? "Broken down" : "Working"} ${this.Name}, manufactured in the year ${this.year}`;
    },
};
const drink = {
    color: "brown",
    carbonation: true,
    sugar: 40,
    summary: function () {
        return `My drink has ${this.sugar} grams of sugar`;
    },
};
const printVehicle = function (vehicle) {
    console.log(`Name: ${vehicle.Name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken?: ${vehicle.broken}`);
};
const printCarReport = function (report) {
    console.log(`Report: ${report.summary()}`);
};
const printDrinkReport = function (report) {
    console.log(`Report: ${report.summary()}`);
};
console.log(">>>--------o--------<<<");
printVehicle(oldCivic);
console.log(">>>--------o--------<<<");
printCarReport(oldCivic);
console.log(">>>--------o--------<<<");
printDrinkReport(drink);
console.log(">>>--------o--------<<<");
