import allConstruct from "../../src/tabulation/all-construct";

describe("Tabulation::AllConstruct", () => {
  it("returns the correct result for target = 'hello'", () => {
    const target = "hello";
    const wordBank = ["cat", "dog", "mouse"];
    const combinations = [];
    expect(allConstruct(target, wordBank)).toStrictEqual(combinations);
  });

  it("returns the correct result for target = ''", () => {
    const target = "";
    const wordBank = ["cat", "dog", "mouse"];
    const combinations = [[]];
    expect(allConstruct(target, wordBank)).toStrictEqual(combinations);
  });

  it("returns the correct result for target = 'abcdef'", () => {
    const target = "abcdef";
    const wordBank = ["ab", "abc", "cd", "def", "abcd"];
    const combinations = [["abc", "def"]];
    expect(allConstruct(target, wordBank)).toStrictEqual(combinations);
  });

  it("returns the correct result for target = 'abcdef', with multiple constructions", () => {
    const target = "abcdef";
    const wordBank = ["ab", "abc", "cd", "def", "abcd", "ef", "c"];
    const combinations = [
      ["abc", "def"],
      ["ab", "c", "def"],
      ["abcd", "ef"],
      ["ab", "cd", "ef"],
    ];
    expect(allConstruct(target, wordBank)).toStrictEqual(combinations);
  });

  it("returns the correct result for target = 'purple'", () => {
    const target = "purple";
    const wordBank = ["purp", "p", "ur", "le", "purpl"];
    const combinations = [
      ["purp", "le"],
      ["p", "ur", "p", "le"],
    ];
    expect(allConstruct(target, wordBank)).toStrictEqual(combinations);
  });

  it("returns the correct result for target = 'skateboard'", () => {
    const target = "skateboard";
    const wordBank = ["bo", "rd", "ate", "t", "ska", "sk", "boar"];
    const combinations = [];
    expect(allConstruct(target, wordBank)).toStrictEqual(combinations);
  });

  it("returns the correct result for target = 'enterapotentpot'", () => {
    const target = "enterapotentpot";
    const wordBank = ["a", "p", "ent", "enter", "ot", "o", "t"];
    const combinations = [
      ["enter", "a", "p", "ot", "ent", "p", "ot"],
      ["enter", "a", "p", "o", "t", "ent", "p", "ot"],
      ["enter", "a", "p", "ot", "ent", "p", "o", "t"],
      ["enter", "a", "p", "o", "t", "ent", "p", "o", "t"],
    ];
    expect(allConstruct(target, wordBank)).toStrictEqual(combinations);
  });

  it("returns the correct result for target = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef' (false)", () => {
    const target = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
    const wordBank = ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"];
    const combinations = [];
    expect(allConstruct(target, wordBank)).toStrictEqual(combinations);
  });
});
