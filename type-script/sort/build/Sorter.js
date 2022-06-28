"use strict";
// issues while sorting string
// unable to compare as upper and lower letter asci value is different X > a -> false -> 88 > 97
// can't mutate array os string / characters -> 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// typeguard -> to check type of working data
// use instanceof to check-> every other values that is created with a constructor function
// use typeof to check -> primitive type->number,string,boolean,symbol
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
