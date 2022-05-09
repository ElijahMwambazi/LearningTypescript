import { NumbersCollection } from "./numbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

// Sorting Numbers
const numbersCollection = new NumbersCollection([20, -5, 0, -84, 2, 37, 27, 8]);
const numberSorter = new Sorter(numbersCollection);

console.log("Sorting Numbers:");
console.log(`Before: ${numbersCollection.data}`);
numberSorter.sort();
console.log(`After: ${numbersCollection.data}`);

console.log("\n");

//  Sorting Characters
const charactersCollection = new CharactersCollection(
    "likewhatintheactualfuck"
);
const characterSorter = new Sorter(charactersCollection);

console.log("Sorting Charaters:");
console.log(`Before: ${charactersCollection.data}`);
characterSorter.sort();
console.log(`After: ${charactersCollection.data}`);
