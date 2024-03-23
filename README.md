# Dynamic Programming

This repo will host all my notes relating to
[Dynamic Programming](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=283s)

## Part One

### Memoization

The recipe for this can be described in 2 steps;

1. Make it work. Create a recursive solution that actually solves the problem.
   - **Visualize the problem as a tree**. Using this method you can break down a
     large problem into smaller instances of the same problem. this is helpful
     when trying to figure out the logic needed for the solution.
   - **Implement the tree using recursion**. treat the leaves of the tree as
     base cases.
   - **Test it**. Use all kinds of inputs (keep in mind that for larger inputs
     the function will be slow)
2. Make it efficient.
   - **Add a memo object to the function**. The object should have key/value
     storage. The keys represent the arguments of the function and values
     represent the return values of the function.
   - **Add new base case to return memo values**. Add a check to see if the memo
     object contains the key so you can return the value. e.g. consider
     `foo(n, memo = {})` check if the key `n` exists in the `memo` object and
     return it
   - **Store return values into the memo**.

## Part Two

### Tabulation

The recipe for this can be described in 4 steps;

1. **Visulalise the problem as a table**. The size of the table should
   correspond to the size of the inputs.
   - The dimensions of the table can be shaped based on the size of the inputs,
     eg. given a 2 inputs `m` and `n`, a 2D array of size `m` \* `n` should be
     considered.
2. **Initialise some values within the table**. Compatible types should be
   chosen.
   - if the output is expected to be a number then the values of the table
     should be initialized with numbers.
3. **Seed the trivial value/s into the table**. These are the basis upon which
   the rest of the table can be seeded.
   - For example with `fibonacci(n)` function, the trivial values are the `n1`
     and `n2` values which can then be used to dynamically seed the rest of the
     table's values in the next step.
4. **Iterate through the table**. Fill further positions based on the value of
   the current element.
   - Here is where some logic is required to figure out how to fill the rest of
     the table. Looking again at the `fibonacci(n)` function, `n1` and `n2` were
     added together to produce `n3`. Similarly, `n2` and `n3` were added
     together to calculate `n4` and so on until the target is reached.

## Conclusion

- notice any overlapping subproblems. focus on the input of the problem and its
  type.
- decide what is the trivially smallest input. is there some input where not a
  lot of work needs to be done to come up with a solution? (e.g. the empty
  string for a string problem or maybe 0 or 1 for the the number problems). then
  think about how you can use this to solve the problem for less trivial cases.
- think recursively to use memoization.
- think iteratively to use tabulation.
- draw a strategy first.
