// Write a function `howSum(targetSum, numbers)` that takes in a
// targetSum and an array of numbers as aarguments.
//
// The function should return an array containing any combination of
// elements that add up to exactly the targetSum.
//
// If there is no combination that adds up to the targetSum, then
// return null.
//
// If there are multiple combinations possible, you may return any
// single one.

function howSum(targetSum, numbers) {
  const table = new Array(targetSum + 1).fill(null);

  table[0] = [];

  for (let i = 0; i < targetSum; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
}

export default howSum;
