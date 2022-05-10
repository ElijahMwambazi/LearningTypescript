import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

// *******************
// Sorting Numbers
// *******************
const numbersCollection = new NumbersCollection([20, -5, 0, -84, 2, 37, 27, 8]);

console.log("Sorting Numbers:");
console.log(`Before: ${numbersCollection.data}`);
numbersCollection.sort();
console.log(`After: ${numbersCollection.data}`);

console.log("\n");

// *******************
//  Sorting Characters
// *******************
const charactersCollection = new CharactersCollection(
    "likewhatintheactualfuck"
);

console.log("Sorting Charaters:");
console.log(`Before: ${charactersCollection.data}`);
charactersCollection.sort();
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

console.log("Sorting Linked List:");
console.log("Before:");
linkedList.print();
linkedList.sort();
console.log("After:");
linkedList.print();
