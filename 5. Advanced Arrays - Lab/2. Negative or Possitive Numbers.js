function negativeOrPositiveNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.unshift(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  console.log(result.join("\n"));
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
//push - add to end
//pop remove from the end
//unshift - add to the beginning
//shift - remove from the beggining
//includes() - loof for value
//indexof() - find index of value
//slice() - Copy Array
