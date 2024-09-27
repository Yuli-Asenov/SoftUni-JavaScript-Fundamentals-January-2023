function equalArrays(arr, arr2) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = Number(arr2[i]);
  }
  let sum = 0;
  let areEqual = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      return;
    } else {
      sum += arr[i];
    }
  }
  console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
