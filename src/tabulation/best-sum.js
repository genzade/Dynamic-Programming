// Write a function `howSum(targetSum, numbers)` that takes in a
// targetSum and an array of numbers as arguments.
//
// The function should return an array containing the shortest
// combination of numbers that add up to exactly the targetsum.
//
// If there is a tie for the shortest combination, you may return
// any one of the shortest.

function howSum(targetSum, numbers) {
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        const combo = [...table[i], num];

        if (!table[i + num] || table[i + num].length > combo.length) {
          table[i + num] = combo;
        }
      }
    }
  }

  return table[targetSum];
}

// console.log(`table after iteration ${i} is ${table}`);
export default howSum;
