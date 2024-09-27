function countOccurrences(sentence, word) {
  let tokens = sentence.split(" ");
  let count = 0;
  for (let el of tokens) {
    if (el === word) {
      count++;
    }
  }
  console.log(count);
}
countOccurrences("This is a word and it also is a sentence", "is");
