// issues while sorting string
// unable to compare as upper and lower letter asci value is different X > a -> false -> 88 > 97
// can't mutate array os string / characters -> 

// typeguard -> to check type of working data
// use instanceof to check-> every other values that is created with a constructor function
// use typeof to check -> primitive type->number,string,boolean,symbol
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const {
      length
    } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}