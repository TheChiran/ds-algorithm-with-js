import { LinkedList } from './LinkedList';
import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";

const numbersCollection = new NumbersCollection([10,3,-5,0]);
numbersCollection.sort();
console.log('Sorted numbers->',numbersCollection.data);

const charactersCollection = new CharacterCollection('Xaayb');
charactersCollection.sort();
console.log('Sorted numbers->',charactersCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);

// linkedList.sort();
// linkedList.print();