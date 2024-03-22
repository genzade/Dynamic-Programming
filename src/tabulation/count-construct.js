// Write a function `countConstruct(target, wordBank)` that accepts a
// target string and an array of strings.

// The function should return the number of ways that the `target` can
// be contructed by concatinating elements of the `wordBank` array.

// You may reuse elements of the `wordBank` as many times as needed.

function countConstruct(target, wordBank) {
  const targetLength = target.length;
  const table = new Array(targetLength + 1).fill().map(() => 0);

  table[0] = 1;

  for (let i = 0; i <= targetLength; i++) {
    // console.log(i);
    if (table[i] > 0) {
      for (const word of wordBank) {
        if (target.slice(i).startsWith(word)) {
          table[i + word.length] += table[i];
        }
      }
    }
  }

  return table[targetLength];
}

export default countConstruct;
