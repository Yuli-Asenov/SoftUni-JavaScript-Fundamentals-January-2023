function sumEvenAndOddSubtraction(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let evenSum = 0;
  let oddSum = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  let diff = evenSum - oddSum;
  console.log(diff);
}
sumEvenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
