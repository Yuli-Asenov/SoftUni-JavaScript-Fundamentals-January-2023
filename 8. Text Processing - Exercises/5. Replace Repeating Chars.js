function replaceRepeatingChars(input) {
  let result = [];
  let result1 = [];
  let text = input.split("");

  for (let i = 0; i < text.length; i++) {
    let current = text[i];
    let previous = text[i - 1];
    let next = text[i + 1];
    if (current == previous) {
      result.push(current);
    } else {
      result1.push(current);
    }
  }
  //console.log(result);
  console.log(result1.join(""));
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
replaceRepeatingChars("qqqwerqwecccwd");
