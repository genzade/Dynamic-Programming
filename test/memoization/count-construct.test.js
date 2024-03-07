import countConstruct from "../../src/memoization/count-construct";

describe("Memoization::CountConstruct", () => {
  it("returns the correct result for target = 'abcdef'", () => {
    const target = "abcdef";
    const wordBank = ["ab", "abc", "cd", "def", "abcd"];
    expect(countConstruct(target, wordBank)).toBe(1);
  });

  it("returns the correct result for target = 'purple'", () => {
    const target = "purple";
    const wordBank = ["purp", "p", "ur", "le", "purpl"];
    expect(countConstruct(target, wordBank)).toBe(2);
  });

  it("returns the correct result for target = 'skateboard'", () => {
    const target = "skateboard";
    const wordBank = ["bo", "rd", "ate", "t", "ska", "sk", "boar"];
    expect(countConstruct(target, wordBank)).toBe(0);
  });

  it("returns the correct result for target = 'enterapotentpot'", () => {
    const target = "enterapotentpot";
    const wordBank = ["a", "p", "ent", "enter", "ot", "o", "t"];
    expect(countConstruct(target, wordBank)).toBe(4);
  });

  it("returns the correct result for target = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef' (false)", () => {
    const target = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
    const wordBank = ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"];
    expect(countConstruct(target, wordBank)).toBe(0);
  });
});
