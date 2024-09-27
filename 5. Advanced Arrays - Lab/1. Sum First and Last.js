function sumFirstAndLast(arr) {
  let firstElement = Number(arr[0]);
  let lastElement = Number(arr[arr.length - 1]);
  return firstElement + lastElement;
}
sumFirstAndLast(["20", "30", "40"]);

//Or ---

//let firstElement = arr.shift();
//let lastElement = arr.pop();
