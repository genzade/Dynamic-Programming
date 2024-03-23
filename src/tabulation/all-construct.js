// Write a function `allConstruct(target, wordBank)` that accepts a
// target string and an array of strings.

// The function should return a 2D array containing all the ways
// that the `target` can be contructed by concatinating elements of
// the `wordBank` array. Each element of the 2D array should represent
// one combination that contsructs the `target`.

// You may reuse elements of the `wordBank` as many times as needed.

// function allConstruct(target, wordBank) {
//   const targetLength = target.length;
//   const table = Array(targetLength + 1)
//     .fill()
//     .map(() => []);

//   table[0].push([]);

//   for (let i = 0; i <= targetLength; i++) {
//     if (table[i] !== undefined) {
//       for (const word of wordBank) {
//         if (target.slice(i).startsWith(word)) {
//           for (const arr of table[i]) {
//             const combo = [...arr, word];
//             table[i + word.length].push(combo);
//           }
//         }
//       }
//     }
//   }

//   return table[targetLength];
// }

function allConstruct(target, wordBank) {
  const targetLength = target.length;
  const table = Array(targetLength + 1)
    .fill()
    .map(() => []);

  table[0].push([]);

  for (let i = 0; i <= targetLength; i++) {
    for (const word of wordBank) {
      if (target.slice(i).startsWith(word)) {
        const combinations = table[i].map((combo) => [...combo, word]);

        table[i + word.length].push(...combinations);
      }
    }
  }

  return table[targetLength];
}

export default allConstruct;
