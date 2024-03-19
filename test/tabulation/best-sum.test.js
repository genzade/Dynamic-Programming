import bestSum from "../../src/tabulation/best-sum";

describe("Tabulation::BestSum", () => {
  it("returns correct result with targetSum = 7", () => {
    const targetSum = 7;
    const numbers = [5, 3, 4, 7];
    const shortestCombo = [7];
    expect(bestSum(targetSum, numbers)).toStrictEqual(shortestCombo);
  });

  it("returns correct result with targetSum = 8", () => {
    const targetSum = 8;
    const numbers = [2, 3, 5];
    const shortestCombo = [3, 5];
    // const shortestCombo = [5, 3];
    expect(bestSum(targetSum, numbers)).toStrictEqual(shortestCombo);
  });

  it("returns correct result with targetSum = 8, numbers = [1, 4, 5]", () => {
    const targetSum = 8;
    const numbers = [1, 4, 5];
    const shortestCombo = [4, 4];
    expect(bestSum(targetSum, numbers)).toStrictEqual(shortestCombo);
  });

  it("returns correct result with targetSum = 9", () => {
    const targetSum = 9;
    const numbers = [9];
    const shortestCombo = [9];
    expect(bestSum(targetSum, numbers)).toStrictEqual(shortestCombo);
  });

  it("returns correct result with targetSum = 100", () => {
    const targetSum = 100;
    const numbers = [1, 2, 5, 25];
    const shortestCombo = [25, 25, 25, 25];
    expect(bestSum(targetSum, numbers)).toStrictEqual(shortestCombo);
  });
});
