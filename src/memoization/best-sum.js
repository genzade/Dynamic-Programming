// Write a function `howSum(targetSum, numbers)` that takes in a targetSum and
// an array of numbers as arguments.
//
// The function should return an array containing the shortest combination of
// numbers that add up to exactly the targetsum.
//
// If there is a tie for the shortest combination, you may return any one of
// the shortest.

// const bestSum = (targetSum, numbers, memo = {}, combos = []) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   if (memo[targetSum] === undefined) {
//     memo[targetSum] = [];
//   }

//   for (const num of numbers) {
//     const nts = targetSum - num;
//     const res = bestSum(nts, numbers, memo);
//     console.log(memo);

//     if (res !== null) {
//       combos.push([...res, num]);
//       memo[targetSum].push(...res, num);
//       // console.log(memo);
//       memo[targetSum];
//     }
//   }

//   memo[targetSum] = null;
//   return null;
// };

function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombo = null;

  for (const num of numbers) {
    const nts = targetSum - num;
    const res = bestSum(nts, numbers, memo);

    if (res !== null) {
      const combo = [...res, num];

      if (shortestCombo === null || combo.length < shortestCombo.length) {
        shortestCombo = combo;
      }
    }
  }

  memo[targetSum] = shortestCombo;
  return shortestCombo;
}

export default bestSum;
