// Example of generics with classes
// Wrong way (without)
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStirngs {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// Right way (with)
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrNum = new ArrayOfAnything([1, 2, 3, 4]);
const arrStr = new ArrayOfAnything(["a", "b", "c", "d", "e", "f"]);

// Example of generics with functions
// Wrong way (without)
function PrintNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function PrintStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Right way (with)
function PrintAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

PrintAnything<number>([1, 2, 3, 4]);
PrintAnything<string>(["a", "b", "c", "d", "e", "f"]);

// Example for Generic Constraints
class Car {
  print(): void {
    console.log("I am a car");
  }
}

class House {
  print(): void {
    console.log("I am a House");
  }
}

interface Printable {
  print(): void;
}

class PrintHousesAndCars<T extends Printable> {
  static print(arr: Printable[]): void {
    for (let i = 0; i < arr.length; i++) {
      arr[i].print();
    }
  }
}

const printHousesAndCars = PrintHousesAndCars.print([
  new House(),
  new Car(),
  new House(),
]);

console.log(printHousesAndCars);
