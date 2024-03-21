// Write a function `canConstruct(target, wordBank)` that accepts a
// target string and an array of strings.

// The function should return a boolean indicating whether or not the
// `target` can be contructed by concatinating elements of the `wordBank`
// array.

// You may reuse elements of the `wordBank` as many times as needed.

function canConstruct(target, wordBank) {
  const targetLength = target.length;
  const table = new Array(targetLength + 1).fill(false);

  table[0] = true;

  for (let i = 0; i < targetLength; i++) {
    if (table[i] === true) {
      for (const word of wordBank) {
        if (target.slice(i).startsWith(word)) table[i + word.length] = true;
      }
    }
  }

  return table[targetLength];
}

export default canConstruct;
