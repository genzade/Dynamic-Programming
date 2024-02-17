const canSum = require("../../src/memoization/can-sum");

describe("CanSum", () => {
	it("returns correct result with targetSum = 7", () => {
		const targetSum = 7;
		const numbers = [5, 3, 4, 7];
		expect(canSum.canSum(targetSum, numbers)).toBe(true);
	});
});

describe("CanSum", () => {
	it("returns correct result with targetSum = 7", () => {
		const targetSum = 7;
		const numbers = [2, 3];
		expect(canSum.canSum(targetSum, numbers)).toBe(true);
	});
});

describe("CanSum", () => {
	it("returns correct result with targetSum = 7", () => {
		const targetSum = 8;
		const numbers = [2, 3, 5];
		expect(canSum.canSum(targetSum, numbers)).toBe(true);
	});
});

describe("CanSum", () => {
	it("returns correct result with targetSum = 7", () => {
		const targetSum = 300;
		const numbers = [7, 14];
		expect(canSum.canSum(targetSum, numbers)).toBe(false);
	});
});

describe("CanSum", () => {
	it("returns correct result with targetSum = 7", () => {
		const targetSum = 7;
		const numbers = [2, 4];
		expect(canSum.canSum(targetSum, numbers)).toBe(false);
	});
});

describe("CanSum", () => {
	it("returns correct result with targetSum = 7", () => {
		const targetSum = 17;
		const numbers = [5, 3, 8, 10, 4, 7];
		expect(canSum.canSum(targetSum, numbers)).toBe(true);
	});
});
