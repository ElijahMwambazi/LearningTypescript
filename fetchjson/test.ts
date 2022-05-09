// const resturant = {
//     names: "Classico Italaiano",
//     locations: "Via Angelo Tavanti 23, Firenza, Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//     mainMenu: ["Pizza", "Pasta", "Risotto"],
// };

// const {
//     names: Names = "",
//     locations: Locations = "",
//     categories: Categories = [],
// } = resturant;

// console.log(Names, Locations, Categories);

// ---------------------------------------------
// const clown = {
//     face: {
//         color: "white",
//         noseShape: "round",
//         noseColor: "red",
//     },
//     printer: function (str: string): void {
//         console.log(
//             `The ${str} has a ${this.face.color} face and a ${this.face.noseShape} ${this.face.noseColor} nose.`
//         );
//     },
//     hair: {
//         color: "rainbow",
//         style: "curly",
//     },
// };

// const bitch = {
//     face: {
//         color: "brown",
//         noseShape: "nose shaped",
//         noseColor: "brown",
//     },
// };

// const printer = clown.printer;
// printer.call(clown, "clown");
// printer.call(bitch, "bitch");

// const boundPrinter = printer.bind(bitch);
// console.log(">>>----o----<<<");
// boundPrinter("bitch");

// ---------------------------------------------
// const words = "don't know. I guess something about something.";

// const oneWord = function (str: string): string {
//     return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str: string): string {
//     const [first, ...others] = str.split(" ");
//     return [first.toUpperCase(), ...others].join(" ");
// };

// type Fn = {
//     (str: string): string;
// };

// const transformer1 = function (str: string, fn: Fn): void {
//     console.log(str);
//     console.log(">>>----------o----------<<<");
//     console.log(fn(str));
//     console.log(">>>----------o----------<<<");
//     console.log(fn.name);
// };

// // Same As Above
// const transformer2 = function (str: string, fn: (str: string) => string): void {
//     console.log(str);
//     console.log(">>>----------o----------<<<");
//     console.log(fn(str));
//     console.log(">>>----------o----------<<<");
//     console.log(fn.name);
// };

// transformer1(words, oneWord);
// console.log(":::::::::::::::::::::::::");
// transformer2(words, upperFirstWord);

// ---------------------------------------------
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// const word0 = "ubeubfu";
// const word1 = "ubeubfu" as any as number;
// const word2: string = "ubeubfu";

// const num = 215; // number literal is used as type for values that are not supposed to be changed.
// let num1 = 215;

// const handleRequest = function (url: string, method: "GET" | "POST"): void {
//     console.log("Nothing");
// };

// const req = { url: "https://example.com", method: "GET" as const };
// handleRequest(req.url, req.method);

// Use ! when you know that the value can’t be null or undefined
// function liveDangerously(x?: number | null) {
//     // No error
//     console.log(x!.toFixed());
// }

// // liveDangerously(null);

// ---------------------------------------------
// enum Directions {
//     Up = 2,
//     Down,
//     Left,
//     Right,
// }

// console.log(Directions.Up);
// console.log(Directions.Down);
// console.log(Directions.Left);
// console.log(Directions.Right);

// enum UserResponce {
//     No,
//     yes,
// }

// function respond(recipient: string, message: UserResponce): void {
//     // ...
// }

// respond("GOD", UserResponce.No);
// respond("GOD", 0); // <= Same as above

// enum LogLevel {
//     ERROR,
//     WARN,
//     INFO,
//     DEBUG,
// }

// type LogLevelStrings = keyof typeof LogLevel;
// type LogLevelStrings1 = "ERROR" | "WARN" | "INFO" | "DEBUG"; // <= Same as above

// // String Enums
// enum LogLevel1 {
//     ERROR = "ERROR",
//     WARN = "WARN",
//     INFO = "INFO",
//     DEBUG = "DEBUG",
// }

// enum Shapes {
//     Circle,
//     Square,
// }

// const c = Shapes.Circle;

// // console.log(c);
// // console.log(Shapes.Circle);

// // console.log(Shapes[0]);
// // console.log(Shapes[c]);
// // console.log(Shapes[Shapes.Circle]);

// type Circle = {
//     kind: Shapes.Circle;
//     radius: number;
// };

// type Square = {
//     kind: Shapes.Square;
//     length: number;
// };

// let cicle: Circle = {
//     kind: Shapes.Circle,
//     radius: 100,
// };

// enum Enum {
//     A = 1,
//     B,
//     C = 2,
// }

// // console.log(Enum);

// const enum EDirection {
//     Up,
//     Down,
//     Left,
//     Right,
// }

// function something(E: EDirection): void {
//     //...
// }

// const ODirection = {
//     UP: 0,
//     Down: 1,
//     Left: 2,
//     Right: 3,
// } as const;

// type odirection = typeof ODirection[keyof typeof ODirection];

// function something1(O: odirection): void {
//     //...
// }

// ---------------------------------------------
// Dos And Don'ts
// const obj = {
//     a: "sduen",
// } as const;

// type a = typeof obj[keyof typeof obj];

// function bluh(obj: a): void {
//     //...
// }

// interface Code {
//     Name(c: (a: unknown, b: number) => void): void; // <= it’s always legal to provide a callback that accepts fewer arguments
// }

// // Function overloading
// declare function dumb(a: (b: number, c: string) => void): void {
//     //...
// };

// declare function dumb(d: (e: string, f: string) => void): void {
//     //...
// };

// ---------------------------------------------
// const secureBooking = function (): () => void {
//     let passengerCount = 0;

//     return function (): void {
//         passengerCount++;
//         console.log(`${passengerCount} passangers`);
//     };
// };

// const booker = secureBooking();

// ---------------------------------------------
// CLASSES
// class Point {
//     readonly x = 20;
//     y = 15;
//     z = 78;

//     constructor() {
//         this.x = 12; // <= Wouldnt work due to varible being declared readonly or const😑
//         this.y = 4;
//         this.z = 55;

//         let z: number;
//         z = 20;
//     }

//     err(): void {
//         console.log(this.x);
//         this.x = 54; // <= Wouldnt work due to varible being declared readonly or const😑
//         console.log(this.x);
//     }
// }

// const p = new Point();

// console.log(p);
// p.err();

// class Point {
//     // Overloads
//     constructor(x: number, y: string);
//     // constructor(s: string);
//     constructor(xs: any, y?: any) {
//         // TBD
//     }

//     x = "string";
// }

// class Dot extends Point {
//     constructor() {
//         super("never");
//         console.log(this.x);
//     }
// }

// let x = 20;

// class E {
//     x = "something";

//     f(): void {
//         console.log("1. this.x = " + this.x);
//         console.log("1. x = " + x);

//         this.x = "another";
//         x = 500;
//         console.log("\n");

//         console.log("2. this.x = " + this.x);
//         console.log("2. x = " + x);
//     }
// }

// const e = new E();

// e.f();

// class Rectangle {
//     name: string;
//     width: number;
//     height: number;

//     constructor(width: number, height: number) {
//         this.name = "rectangle";
//         this.width = width;
//         this.height = height;
//     }
// }

// class FillRectangle extends Rectangle {
//     constructor(width: number, height: number) {
//         super(width, height);
//         this.name = "fillrectangle";
//         this.width = width;
//         this.height = height;
//     }

//     area(): number {
//         return this.width * this.height;
//     }
// }

// const rectangle = new Rectangle(20, 12);
// const fillrectangle = new FillRectangle(30, 16);

// // console.log(rectangle, "\n");
// console.log(fillrectangle.area());

// class Something {}

// const some = new Something();
// console.log(some instanceof Something);

// ---------------------------------------------
// Genorators
// function* what() {
//     yield 10;
//     yield 20;
//     yield 30;
//     yield 40;
//     yield 50;
// }

// const w = what();

// // w.throw(30);
// console.log(w.next().value);
// console.log(w.next().value);
// console.log(w.next().value);
// console.log(w.return());
// console.log(w.next().value);
// console.log(w.next().value);
// console.log(w.next().value);

// console.log(w);

// ---------------------------------------------
// class Something {
//     readonly name: string;

//     constructor(otherName?: string) {
//         if (otherName !== undefined) {
//             this.name = otherName;
//         }
//     }

//     err() {
//         this.name = "not ok";
//     }
// }

// const s = new Something();

// s.name = "also not ok";

class Todo {
    obj = {
        1: "finish type script",
        2: "finish css",
        3: "work on type script project",
        _collect: (a: string, b: string, c: string): string => a + b + c,
        get collect() {
            return this._collect;
        },
        set collect(value) {
            this._collect = value;
        },
    };

    constructor({ args }: { args: [] }) {
        console.log(args);
    }
}

const t = new Todo(this.obj);

console.log(t.constructor);

// ---------------------------------------------
