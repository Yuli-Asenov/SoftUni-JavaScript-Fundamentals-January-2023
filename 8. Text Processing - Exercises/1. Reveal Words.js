function revealWords(word, text) {
  let wordsArr = word.split(", ");
  let textArr = text.split(" ");

  for (let word of wordsArr) {
    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i].includes("*") && textArr[i].length === word.length) {
        textArr[i] = word;
      }
    }
  }
  console.log(textArr.join(" "));
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
