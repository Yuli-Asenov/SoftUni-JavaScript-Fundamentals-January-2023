function arrowFunctions(a, b, c) {
  let sumTwoNumbers = (a, b) => a + b;
  let subtractTwoNumbers = (a, b) => a - b;

  let sum = sumTwoNumbers(a, b);
  let subtract = subtractTwoNumbers(sum, c);

  return subtract;
}
console.log(arrowFunctions(1, 17, 30));
