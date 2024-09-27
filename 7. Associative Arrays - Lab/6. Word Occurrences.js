function wordOccurrences(data) {
  let result = {};
  let word = String(data).split(",");
  for (let el of word) {
    result[el] = 0;
  }
  for (let el of data) {
    if (result.hasOwnProperty(el)) {
      result[el] += 1;
    }
  }

  let sortArr = Object.entries(result).sort((a, b) => b[1] - a[1]);
  for (let [key, value] of sortArr) {
    console.log(`${key} -> ${value} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
