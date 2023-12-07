function translate(word) {}

module.exports = translate;

// pigLatin.test.js

const translate = require("./pigLatin");

describe("Pig Latin Translation", () => {
  // Tests for words starting with different vowels
  test('translates words starting with "a"', () => {
    expect(translate("apple")).toBe("appleway");
  });

  test('translates words starting with "e"', () => {
    expect(translate("else")).toBe("elseway");
  });

  // Tests for words starting with one consonant
  test("translates words starting with one consonant", () => {
    expect(translate("giraffe")).toBe("iraffegay");
    // Add more test cases with different starting consonants
  });

  // Add more test cases for various scenarios
});
