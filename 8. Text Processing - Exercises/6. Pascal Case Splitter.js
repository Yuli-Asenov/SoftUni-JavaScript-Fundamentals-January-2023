// function pascalCaseSplitter(text) {
//   result = [];
//   let startIndex = 0;
//   for (let i = 1; i < text.length; i++) {
//     let ch = text[i];
//     if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
//       result.push(text.substring(startIndex, i));
//       startIndex = i;
//     }
//   }
//   result.push(text.substring(startIndex));
//   console.log(result.join(", "));
// }
// pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");

// function pascalCaseSplitter(text) {
//   result = "";
//   result += text[0];
//   for (let i = 1; i < text.length; i++) {
//     let ch = text[i];
//     if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
//       result += ", " + text[i];
//     } else {
//       result += text[i];
//     }
//   }
//   console.log(result);
// }
// pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");

function pascalCaseSplitter(text) {
  let result = text[0];
  let lower = text.toLowerCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] !== lower[i]) {
      result += ", ";
    }
    result += text[i];
  }
  console.log(result);
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
