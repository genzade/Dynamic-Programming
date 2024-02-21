// Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing any combination of elements that add up to the targetSum.
// If there is no combination that add up to exactly the targetSum, then return null.

// If there are multiple combinations possible, you may return any single one.

const howSum = (targetSum, numbers, memo = {}) => {
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
};

module.exports = {
  howSum: howSum,
};

// (CISSP, OSCP, GSE)

// targetSum = 3;
// numbers = [1, 2];
// combos = [1,1,1]
//          [1,2]
//          [2,1]
//
//                                      3
//                                  /      \
//                               (-1)      (-2)
//                               /          \
//                            2              1
//                          /   \          /   \
//                       (-1)  (-2)     (-1)  (-2)
//                       /       \      /       \
//                      1         0    0         -1
//                    /  \
//                 (-1)  (-2)
//                 /       \
//                0        -1

// targetSum = 7;
// numbers = [2, 3];
// combos = [2,2,3]
//          [2,3,2]
//          [3,2,2]
//
//                                      7
//                                    /   \
//                                  /      \
//                               (-2)      (-3)
//                               /          \
//                       5    --             --    4
//                     /   \                     /   \
//                  (-2)  (-3)                (-2)  (-3)
//                  /       \                 /       \
//                 3         2               2         1
//               /  \       /  \           /  \       /  \
//            (-2)  (-3) (-2)  (-3)     (-2)  (-3) (-2)  (-3)
//            /       \  /       \      /       \  /       \
//           1        0 0       -1     0       -1 -1       -2

//   targetSum ---- 7 nts ---- 5
//   targetSum ---- 5 nts ---- 3
//   targetSum ---- 3 nts ---- 1
//   targetSum ---- 1 nts ---- -1
//   targetSum ---- 1 nts ---- -2
//   done....
//   targetSum ---- 3 nts ---- 0
//   done....
//   targetSum ---- 5 nts ---- 2
//   targetSum ---- 2 nts ---- 0
//   targetSum ---- 2 nts ---- -1
//   done....
//   done....
//   targetSum ---- 7 nts ---- 4
//   targetSum ---- 4 nts ---- 2
//   targetSum ---- 2 nts ---- 0
//   targetSum ---- 2 nts ---- -1
//   done....
//   targetSum ---- 4 nts ---- 1
//   targetSum ---- 1 nts ---- -1
//   targetSum ---- 1 nts ---- -2
//   done....
//   done....
//   done....
