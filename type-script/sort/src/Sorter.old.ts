export class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const {
      length
    } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        // All of this only works if collection is number[]
        // If collection is an array of numbers
        if(this.collection instanceof Array){ // as typeof array[] returns 'object' 
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // Only going to work if collection is a string
        // If collection is a string, do this logic instead:
        if(typeof this.collection === 'string'){

        }
      }
    }
  }
}