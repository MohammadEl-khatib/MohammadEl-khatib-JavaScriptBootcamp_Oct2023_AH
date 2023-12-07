function translate(word) {
  const vowels = ["a", "e", "i", "o", "u"];

  word = word.toLowerCase();

  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    let vowelIndex = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        vowelIndex = i;
        break;
      }
    }

    return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
  }
}

module.exports = translate;
