import gridTraveller from "../../src/memoization/grid-traveller";

describe("GridTraveller", () => {
  it("returns correct number of steps given m, n are 0, 1, repsectively", () => {
    const m = 0;
    const n = 1;
    expect(gridTraveller(m, n)).toBe(0);
  });

  it("returns correct number of steps given m, n are 1, 0, repsectively", () => {
    const m = 1;
    const n = 0;
    expect(gridTraveller(m, n)).toBe(0);
  });

  it("returns correct number of steps given m, n are 1, 1, repsectively", () => {
    const m = 1;
    const n = 1;
    expect(gridTraveller(m, n)).toBe(1);
  });

  it("returns correct number of steps given m, n are 1, 2, repsectively", () => {
    const m = 1;
    const n = 2;
    expect(gridTraveller(m, n)).toBe(1);
  });

  it("returns correct number of steps given m, n are 2, 1, repsectively", () => {
    const m = 2;
    const n = 1;
    expect(gridTraveller(m, n)).toBe(1);
  });

  it("returns correct number of steps given m, n are 2, 2, repsectively", () => {
    const m = 2;
    const n = 2;
    expect(gridTraveller(m, n)).toBe(2);
  });

  it("returns correct number of steps given m, n are 3, 2, repsectively", () => {
    const m = 3;
    const n = 2;
    expect(gridTraveller(m, n)).toBe(3);
  });

  it("returns correct number of steps given m, n are 3, 3, repsectively", () => {
    const m = 3;
    const n = 3;
    expect(gridTraveller(m, n)).toBe(6);
  });

  it("returns correct number of steps given m, n are 100, 100, repsectively", () => {
    const m = 18;
    const n = 18;
    expect(gridTraveller(m, n)).toBe(2_333_606_220);
  });
});
