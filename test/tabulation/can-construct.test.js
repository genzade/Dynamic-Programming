import canConstruct from "../../src/tabulation/can-construct";

describe("Tabulation::CanConstruct", () => {
  it("returns the correct result for target = 'abcdef'", () => {
    const target = "abcdef";
    const wordBank = ["ab", "abc", "cd", "def", "abcd"];
    expect(canConstruct(target, wordBank)).toBe(true);
  });

  it("returns the correct result for target = 'skateboard'", () => {
    const target = "skateboard";
    const wordBank = ["bo", "rd", "ate", "t", "ska", "sk", "boar"];
    expect(canConstruct(target, wordBank)).toBe(false);
  });

  it("returns the correct result for target = 'skgsfdgoard'", () => {
    const target = "skgsfdgoard";
    const wordBank = ["bo", "rd", "ate", "t", "ska", "sk", "boar"];
    expect(canConstruct(target, wordBank)).toBe(false);
  });

  it("returns the correct result for target = ''", () => {
    const target = "";
    const wordBank = ["cat", "dog", "mouse"];
    expect(canConstruct(target, wordBank)).toBe(true);
  });

  it("returns the correct result for target = 'enterapotentpot'", () => {
    const target = "enterapotentpot";
    const wordBank = ["a", "p", "ent", "enter", "ot", "o", "t"];
    expect(canConstruct(target, wordBank)).toBe(true);
  });

  it("returns the correct result for target = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef' (false)", () => {
    const target = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
    const wordBank = ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"];
    expect(canConstruct(target, wordBank)).toBe(false);
  });

  it("returns the correct result for target = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef' (true)", () => {
    const target = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
    const wordBank = [
      "e",
      "ee",
      "eee",
      "eeee",
      "eeeee",
      "eeeeee",
      "eeeeeeeeeeef",
    ];
    expect(canConstruct(target, wordBank)).toBe(true);
  });
});
