// Creating pointers or values that correspond to an
// index or position and move towards the beginning,
// end or middle based on a certain condition

// very efficient for solving problems with minimal
// space complexity as well

// Sum zero ->
// write a function called sumZero which accepts a sorted array of integers
// the function should find the first pair where the sum is 0.
// return an array that includes both values that sum to zero or undefined if a pair does not exist
function sumZeroNaive(numbers) { // O(N^2)
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === 0) {
        return [numbers[i], numbers[j]];
      }
    }
  }
}

function sumZeroRefactored(numbers) { // O(N)
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === 0) return [numbers[left], numbers[right]];
    else if (sum > 0) right--;
    else left++;
  }
  return undefined;
}

// console.log(sumZeroNaive([-3, -2, -1, 0, 1, 2, 3]))
// console.log(sumZeroNaive([-4, -3, -2, -1, 0, 1, 2, 5]));
// console.log(sumZeroRefactored([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

// countUniqueValues
// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array,
// but it will always be sorted
function countUniqueValues(arr) { // O(N)
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}
console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]))