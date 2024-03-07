// Write a function `countConstruct(target, wordBank)` that accepts a
// target string and an array of strings.

// The function should return the number of ways that the `target` can
// be contructed by concatinating elements of the `wordBank` array.

// You may reuse elements of the `wordBank` as many times as needed.

function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let counter = 0;

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const newTarget = target.slice(word.length);
      const result = countConstruct(newTarget, wordBank, memo);
      counter += result;
    }
  }

  memo[target] = counter;

  return counter;
}

export default countConstruct;
