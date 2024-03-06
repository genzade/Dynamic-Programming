// Write a function `canConstruct(target, wordBank)` that accepts a
// target string and an array of strings.

// The function should return a boolean indicating whether or not the
// `target` can be contructed by concatinating elements of the `wordBank`
// array.

// You may reuse elements of the `wordBank` as many times as needed.

function canConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const newTarget = target.slice(word.length);
      const result = canConstruct(newTarget, wordBank, memo);

      if (result) {
        memo[target] = result;
        return true;
      }
    }
  }

  memo[target] = false;

  return false;
}

export default canConstruct;
