const hs = require("../../src/memoization/how-sum");

describe("Memoization::HowSum", () => {
  it("returns correct result with targetSum = 8", () => {
    const targetSum = 8;
    const numbers = [2, 3, 5];
    const combinations = [
      [2, 2, 2, 2],
      [3, 5],
      [2, 3, 3],
    ];
    expect(hs.howSum(targetSum, numbers)).toBeOneOf(combinations);
  });

  it("returns correct result with targetSum = 7", () => {
    const targetSum = 7;
    const numbers = [2, 3];
    const combinations = [
      [2, 2, 3],
      [2, 3, 2],
      [3, 2, 2],
    ];
    expect(hs.howSum(targetSum, numbers)).toBeOneOf(combinations);
  });

  it("returns correct result with targetSum = 7, numbers = [2, 4]", () => {
    const targetSum = 7;
    const numbers = [2, 4];
    expect(hs.howSum(targetSum, numbers)).toBe(null);
  });

  it("returns correct result with targetSum = 0", () => {
    const targetSum = 0;
    const numbers = [1, 2, 3];
    const combinations = [[]];
    expect(hs.howSum(targetSum, numbers)).toBeOneOf(combinations);
  });

  it("returns correct result with targetSum = 1", () => {
    const targetSum = 1;
    const numbers = [1, 2, 3];
    const combinations = [[1]];
    expect(hs.howSum(targetSum, numbers)).toBeOneOf(combinations);
  });

  it("returns correct result with targetSum = 2", () => {
    const targetSum = 2;
    const numbers = [1, 2, 3];
    const combinations = [[1, 1], [2]];
    expect(hs.howSum(targetSum, numbers)).toBeOneOf(combinations);
  });

  it("returns correct result with targetSum = 3", () => {
    const targetSum = 3;
    const numbers = [1, 2];
    const combinations = [
      [1, 1, 1],
      [1, 2],
    ];
    expect(hs.howSum(targetSum, numbers)).toBeOneOf(combinations);
  });

  it("returns correct result with targetSum = 300", () => {
    const targetSum = 300;
    const numbers = [7, 14];
    expect(hs.howSum(targetSum, numbers)).toBe(null);
  });
});
