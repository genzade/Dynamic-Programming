// Say that you are a traveller on a 2D grid. You begin in the
// top-left corner and your goal is to travel to the bottom-right
// corner. You may only move down or right.
//
// In how many ways can you travel to the goal on a grid with
// dimensions m * n?
//
// write a function`gridTraveller(m, n)` that calculates this.

// function gridTraveller(m, n) {
//   if (m === 0 || n === 0) return 0;
//   if (m === 1 || n === 1) return 1;

//   const table = Array.from({ length: m + 1 }, () => Array(n + 1).fill(1));

//   table[0][0] = 0;

//   for (let i = 0; i <= m; i++) {
//     for (let j = 0; j <= n; j++) {
//       const iPrev = i - 1;
//       const jPrev = j - 1;

//       if (i > 0 && j > 0) {
//         table[i][j] = table[iPrev][j] + table[i][jPrev];
//       }
//     }
//   }

//   return table[m - 1][n - 1];
// }

function gridTraveller(m, n) {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  if (m > 0 && n > 0) {
    table[1][1] = 1;
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (i + 1 <= m) table[i + 1][j] += current;
      if (j + 1 <= n) table[i][j + 1] += current;
    }
  }

  return table[m][n];
}

export default gridTraveller;
