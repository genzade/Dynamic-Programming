const fibonacci = require("../../src/memoization/fib");

describe("Fib", () => {
	it("will return the correct 4th number of the fibonacci sequence", () => {
		expect(fibonacci.fib(4)).toBe(3);
	});

	it("will return the correct 8th number of the fibonacci sequence", () => {
		expect(fibonacci.fib(8)).toBe(21);
	});

	it("will return the correct 10th number of the fibonacci sequence", () => {
		expect(fibonacci.fib(10)).toBe(55);
	});

	it("will return the correct 20th number of the fibonacci sequence", () => {
		expect(fibonacci.fib(20)).toBe(6_765);
	});

	it("will return the correct 25th number of the fibonacci sequence", () => {
		expect(fibonacci.fib(25)).toBe(75_025);
	});

	it("will return the correct 25th number of the fibonacci sequence", () => {
		expect(fibonacci.fib(59)).toBe(956_722_026_041);
	});
});
