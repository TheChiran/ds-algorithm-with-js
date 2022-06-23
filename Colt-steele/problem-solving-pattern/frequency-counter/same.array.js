// uses objects or sets to collect values/frequencies of values

// naive solution -> O(n^2)
function sameNaive(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2);
    if (correctIndex == -1) return false;
    console.log(array2);
    array2.splice(correctIndex, 1)
  }
  return true;
}

// console.log(sameNaive([1, 2, 3, 2], [9, 1, 4, 4]));

// Frequency counter -> O(n)
function sameUsingFrequencyCounter(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // calculating times a number iterated
  for (let val of arr2) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}
console.log(sameUsingFrequencyCounter([1, 2, 3, 2], [9, 1, 4, 4]));