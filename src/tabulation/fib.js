// Write a function `fib(n)` that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.
//
// The 0th number of the sequence is 0.
// The 1st number of the sequence is 1.
//
// To generate the next number of the sequence, we sum the previous two.

function fib(n) {
  const size = n + 1;
  const table = new Array(size).fill(0);

  table[1] = 1;

  for (let i = 0; i < size; i++) {
    const current = table[i];

    table[i + 1] += current;
    table[i + 2] += current;
  }

  return table[n];
}

export default fib;
