// Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing any combination of elements that add up to the targetSum.
// If there is no combination that add up to exactly the targetSum, then return null.

// If there are multiple combinations possible, you may return any single one.

function howSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const nts = targetSum - num;
    const result = howSum(nts, numbers, memo);

    if (result !== null) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
}

export default howSum;
