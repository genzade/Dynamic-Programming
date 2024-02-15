// You are a traveller on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
//
// In how many ways can you travel to the goal on a grid with dimensions m * n?
//
// TASK: write a function `gridTraveller(m, n)` that calculates this.

// // recursive solution
// const gridTraveller = (m, n) => {
// 	if (m === 1 && n === 1) return 1;
// 	if (m === 0 || n === 0) return 0;
// 	return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
// };

// recursive solution using memoization
const gridTraveller = (m, n, memo = {}) => {
	const key = `${m}, ${n}`;

	if (key in memo) return memo[key];
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;

	memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);

	return memo[key];
};

module.exports = {
	gridTraveller: gridTraveller,
};
