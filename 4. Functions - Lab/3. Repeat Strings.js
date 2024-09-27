function repeatStrings(str, n) {
  let repeatedString = "";
  for (i = 0; i < n; i++) {
    repeatedString += str;
  }
  console.log(repeatedString);
}
repeatStrings("abc", 3);
