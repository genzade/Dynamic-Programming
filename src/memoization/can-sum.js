// Write a function `canSum(targetSum, numbers)` that takes in a targetSum and
// an array of numbers as arguments.
//
// The function should return a boolean indicating whether or not it is possible
// to generate the targetSum  using nymbers from the array.
//
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (num of numbers) {
    const newTargetSum = targetSum - num;

    memo[newTargetSum] = canSum(newTargetSum, numbers, memo);
  }

  return memo[0] || false;
};

module.exports = {
  canSum: canSum,
};

//                                                  7, [2, 3]

//                    5, [2, 3]                                                 4, [2, 3]

//       3, [2, 3]                 2, [2, 3]                         2, [2, 3]                1, [2, 3]

// 1, [2, 3]  0, [2, 3]       0, [2, 3]  1, [2, 3]           0, [2, 3]  1, [2, 3]       -1, [2, 3]  -2, [2, 3]
