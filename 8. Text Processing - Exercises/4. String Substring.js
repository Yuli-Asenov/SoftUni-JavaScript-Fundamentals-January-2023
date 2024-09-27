// function stringSubstring(searchedWord, text) {
//   let result = [];
//   let lowerText = text.toLowerCase();
//   let words = lowerText.split(" ");

//   for (let el of words) {
//     el = el.toLowerCase();
//     if (el === searchedWord) {
//       result.push(searchedWord);
//       break;
//     }
//     //else {
//     //   console.log(`${searchedWord} not found!`);
//     //   break;
//     // }
//   }
//   console.log(result.join(" "));
// }
// stringSubstring("javascript", "JavaScript is the best programming language");
// stringSubstring("python", "JavaScript is the best programming language");

function stringSubstring(searchedWord, text) {
  searchedWord = searchedWord.toLowerCase();
  let textArr = text.split(" ");
  let isFound = false;

  for (let el of textArr) {
    el = el.toLowerCase();
    if (el.toLowerCase() === searchedWord) {
      console.log(searchedWord);
      isFound = true;
      break;
    }
  }
  if (isFound === false) {
    console.log(`${searchedWord} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
