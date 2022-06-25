// Sliding windows -> Pattern
// This pattern involves creating a window
// which can either be an array or number
// from one position to another
// depending on a certain condition, the window
// either increases or closes (and a new window is created)
// very useful for keeping track of a subset of data in an
// array/string etc.

function maxSubarraySumNaive(arr, num) { // naive solution
  if (num > arr.length) return null;
  let max = -Infinity,
    temp = 0;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) temp += arr[i + j];
    if (temp > max) max = temp;
  }
  return max;
}

function maxSubarraySum(arr, num) { //-> sliding window (O(N))
  let maxSum = 0,
    tempSum = 0;

  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));