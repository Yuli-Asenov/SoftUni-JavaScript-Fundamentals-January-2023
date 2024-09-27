function bombModified(arr, bombAndPower) {
  let bomb = bombAndPower[0];
  let power = bombAndPower[1];
  let copyArr = arr.slice(0);
  let result = [];
  let sum = 0;

  for (let i = 0; i < copyArr.length; i++) {
    if (arr[i] == bomb) {
      let spliced = arr.splice(i - power, power * 2 + 1);
      console.log(spliced);
      i = 0;
      if (arr[i] < 0) {
        arr[i] = 0;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
    result.push(sum);
  }
  console.log(sum);
}
// bombModified([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]); //12
// bombModified([1, 4, 4, 2, 8, 9, 1], [9, 3]); //5
// bombModified([1, 7, 7, 1, 2, 3], [7, 1]); //6
// bombModified([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]); //4
// bombModified([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2]);
