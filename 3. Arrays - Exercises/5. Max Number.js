function maxNumber(arr) {
  let secondArr = [];
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    maxNum = Math.max(...arr);
    if (arr[i] === maxNum) {
      secondArr.push(maxNum);
    }
    arr[i] = 0;
  }
  console.log(secondArr.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
