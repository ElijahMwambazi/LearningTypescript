"use strict";
// import axios from "axios";
// const url = "https://jsonplaceholder.typicode.com/todos/1";
// interface TODO {
//     id: number;
//     title: string;
//     completed: boolean;
// }
// axios.get(url).then((response) => {
//     const todo = response.data as TODO;
//     const title = todo.title;
//     const completed = todo.completed;
// });
// let today: Date = new Date();
// let count: number = 100;
// let nothing: null = null;
// let none: null;
// let list = [1, 2, 5, "hhb", true];
// const json = '{"x": 10, "y": 20}';
// // Use type annotation
// const coordinates: { x: number; y: number } = JSON.parse(json);
// console.log(coordinates);
// Functions
const add1 = function (a, b) {
    return a + b;
};
const add2 = function (a, b) {
    return a + b;
};
const add3 = function (a, b) {
    return a + b;
};
const forecast = {
    date: new Date(),
    weather: "sunny",
};
const getWeather = function ({ date, weather, }) {
    console.log(date);
    console.log(weather);
};
getWeather(forecast);
const profile = {
    Name: "GOD",
    age: 0,
    location: "hell",
    coordinates: {
        lat: 666,
        lon: 666,
    },
    setAge: function (age) {
        this.age = age;
    },
};
const { age, Name } = profile;
const { coordinates: { lat, lon }, } = profile;
