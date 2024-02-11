// 0, 1, 2, 3, 4, 5, 6, 7
// 0, 1, 1, 2, 3, 5, 8, 13

// -- brute force solution
// const fib = (n) => {
// 	let counter = 0;
// 	let left = 0;
// 	let right = 1;
// 	let ans;

// 	while (counter < n - 1) {
// 		ans = left + right;
// 		left = right;
// 		right = ans;

// 		counter++;
// 	}

// 	return ans;
// };

// // -- recursive solution
// const fib = (n) => {
// 	// if (n <= 2) return 1;
// 	// return fib(n - 1) + fib(n - 2);
// 	//
// 	// or one-liner if you want to show off
// 	return (n <= 2 && 1) || fib(n - 1) + fib(n - 2);
// };
// // this is suboptimal as this function would be called to calculate every number up to n.
// // might be fine for small number but would take a long time as n increases.
// // Moreover, this is an O(2^N) time complexity and O(N) space complexity.
// // This can Be imporoved.
// //
// // Now we can write this same function using memoization and improve the time complexity.

const fib = (n, memo = {}) => {
	if (n in memo) return memo[n]; // if key n exists in memo, return value
	if (n <= 2) return 1;

	memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // pass memo to subsequent fib calls

	return memo[n];
};

module.exports = {
	fib: fib,
};
