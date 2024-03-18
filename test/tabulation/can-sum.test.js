import canSum from "../../src/tabulation/can-sum";

describe("Tabulation::CanSum", () => {
  it("returns correct result with targetSum = 0", () => {
    const targetSum = 0;
    const numbers = [5, 3, 4, 7];
    expect(canSum(targetSum, numbers)).toBe(true);
  });

  it("returns correct result with targetSum = 7, [5, 3, 4, 7]", () => {
    const targetSum = 7;
    const numbers = [5, 3, 4, 7];
    expect(canSum(targetSum, numbers)).toBe(true);
  });

  it("returns correct result with targetSum = 7, [2, 3]", () => {
    const targetSum = 7;
    const numbers = [2, 3];
    expect(canSum(targetSum, numbers)).toBe(true);
  });

  it("returns correct result with targetSum = 8", () => {
    const targetSum = 8;
    const numbers = [2, 3, 5];
    expect(canSum(targetSum, numbers)).toBe(true);
  });

  it("returns correct result with targetSum = 300", () => {
    const targetSum = 300;
    const numbers = [7, 14];
    expect(canSum(targetSum, numbers)).toBe(false);
  });
});
