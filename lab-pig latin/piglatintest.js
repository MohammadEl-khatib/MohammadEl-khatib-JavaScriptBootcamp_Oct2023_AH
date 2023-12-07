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
    expect(translate("hello")).toBe("ellohay");
  });

  test("translates words starting with two consonants", () => {
    expect(translate("drink")).toBe("inkdray");
  });

  test("translates words starting with three consonants", () => {
    expect(translate("three")).toBe("eethray");
  });

  test("checks lowercase conversion", () => {
    expect(translate("Hello")).toBe("ellohay");
  });
});
