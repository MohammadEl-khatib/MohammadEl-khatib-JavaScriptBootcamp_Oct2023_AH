const translate = require("./piglatin");

describe("Pig Latin Translation", () => {
  test('translates words starting with "a"', () => {
    expect(translate("apple")).toBe("appleway");
  });

  test('translates words starting with "e"', () => {
    expect(translate("else")).toBe("elseway");
  });

  test("translates words starting with one consonant", () => {
    expect(translate("giraffe")).toBe("iraffegay");
  });
});
