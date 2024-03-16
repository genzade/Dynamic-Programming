// Write a function `allConstruct(target, wordBank)` that accepts a
// target string and an array of strings.

// The function should return a 2D array containing all the ways
// that the `target` can be contructed by concatinating elements of
// the `wordBank` array. Each element of the 2D array should represent
// one combination that contsructs the `target`.

// You may reuse elements of the `wordBank` as many times as needed.

function allConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);

      result.push(...targetWays);
    }
  }

  memo[target] = result;

  return result;
}

export default allConstruct;
