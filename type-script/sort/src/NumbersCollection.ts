import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
  constructor(public data: number[]) { // shorthand to store data
    super();
  }

  get length():number{ // get -> using this we don't need to use / call method like length()
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex] ? true : false;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}