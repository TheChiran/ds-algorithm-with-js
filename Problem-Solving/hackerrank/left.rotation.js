/**
 * @Problem {Left rotation array}
 * @Solution {using array shift}
 * 1. store shifted element into a separate variable
 * 2. Push shifted element into array
 * @Example 
 * n(rotation time)-> 3, array -> [1,2,3,4,5] -> expected -> [4,5,1,2,3]
 * n-> 1
 * temp = 1; array [2,3,4,5]
 * push(temp) -> array [2,3,4,5,1]
 * n-> 2
 * temp = 2; array [3,4,5,1]
 * push(temp) -> array [3,4,5,1,2]
 * n-> 3
 * temp = 3;array [4,5,1,2]
 * push(temp) -> array [4,5,1,2,3]
 */

function rotateLeft(d, arr) {
    // Write your code here
    let count = 1,
        rotatedElement;

    while (count <= d) {
        rotatedElement = arr.shift();
        arr.push(rotatedElement);
        count++;
    }
    return arr;
}

console.log('3 times rotated array', rotateLeft(3, [1, 2, 3, 4, 5]));