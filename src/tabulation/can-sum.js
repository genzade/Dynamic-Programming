// Write a function `canSum(targetSum, numbers)` that takes in a
// targetSum and an array of numbers as arguments.
//
// The function should return a boolean indidcating whether or not it
// is possible to generate the targetSum using numbers from the array.
//
// You may use an element of the array as many times as needed.
//
// You may assume that all input numbers are nonnegative.

function canSum(targetSum, numbers) {
  const table = new Array(targetSum + 1).fill(false);

  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (const num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];
}

export default canSum;
