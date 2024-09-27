function wordsTracker(data) {
  let result = {};
  let word = data.shift().split(" ");
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
    console.log(`${key} - ${value}`);
  }
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

//Map Method

// function wordsTrackerMap(data) {
//   //Mapa ima size - kolko elementa ima v sebe si
//   let result = new Map();
//   let word = data.shift().split(" ");

//   for (let el of word) {
//     result.set(el, 0);
//   }

//   for (let el of data) {
//     if (result.has(el)) {
//       result.set(el, result.get(el) + 1);
//     }
//   }
//   let sortArr = Array.from(result).sort((a, b) => b[1] - a[1]);

//   for (let [key, value] of sortArr) {
//     console.log(`${key} - ${value}`);
//   }
// }
// wordsTrackerMap([
//   "this sentence",
//   "In",
//   "this",
//   "sentence",
//   "you",
//   "have",
//   "to",
//   "count",
//   "the",
//   "occurrences",
//   "of",
//   "the",
//   "words",
//   "this",
//   "and",
//   "sentence",
//   "because",
//   "this",
//   "is",
//   "your",
//   "task",
// ]);
