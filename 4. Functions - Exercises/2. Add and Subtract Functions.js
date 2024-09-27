function addAndSubtract(a, b, c) {
  let sum = sumTwoNumbers(a, b);
  let subtract = subtractTwoNumbers(sum, c);

  return subtract;
}

function sumTwoNumbers(a, b) {
  return a + b;
}
function subtractTwoNumbers(a, b) {
  return a - b;
}
console.log(addAndSubtract(23, 6, 10));
