function substring(text, startIndex, count) {
  // let endIndex = startIndex + count;
  // let result = text.substring(startIndex, endIndex);
  // console.log(result);

  //Substring function
  let newStr = "";
  let endIndex = startIndex + count;
  for (let i = startIndex; i < text.length; i++) {
    newStr += text[i];
  }
  console.log(newStr);
}
substring("ASentence", 1, 8);
