function cutAndReverse(text) {
  let reverseArr = [];
  let reverseArr1 = [];
  for (let i = 0; i < text.length / 2; i++) {
    reverseArr.push(text[i]);
  }
  for (let i = text.length / 2; i < text.length * 2; i++) {
    reverseArr1.push(text[i]);
  }
  let properArr = [];
  let properArr1 = [];
  for (let j = reverseArr.length - 1; j >= 0; j--) {
    properArr.push(reverseArr[j]);
  }
  for (let j = reverseArr1.length - 1; j >= 0; j--) {
    properArr1.push(reverseArr1[j]);
  }
  console.log(properArr.join(""));
  console.log(properArr1.join(""));
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
