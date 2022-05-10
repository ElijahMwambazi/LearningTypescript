import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

// *******************
// Sorting Numbers
// *******************
const numbersCollection = new NumbersCollection([20, -5, 0, -84, 2, 37, 27, 8]);
const numberSorter = new Sorter(numbersCollection);

console.log("Sorting Numbers:");
console.log(`Before: ${numbersCollection.data}`);
numberSorter.sort();
console.log(`After: ${numbersCollection.data}`);

console.log("\n");

// *******************
//  Sorting Characters
// *******************
const charactersCollection = new CharactersCollection(
    "likewhatintheactualfuck"
);
const characterSorter = new Sorter(charactersCollection);

console.log("Sorting Charaters:");
console.log(`Before: ${charactersCollection.data}`);
characterSorter.sort();
console.log(`After: ${charactersCollection.data}`);

console.log("\n");

// *******************
// Sorting Linked List
// *******************
const linkedList = new LinkedList();

// Adding values to linked list
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const linkedListSorter = new Sorter(linkedList);

console.log("Sorting Linked List:");
console.log("Before:");
linkedList.print();
linkedListSorter.sort();
console.log("After:");
linkedList.print();
