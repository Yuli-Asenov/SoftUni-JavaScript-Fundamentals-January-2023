function calculator(a, op, b) {
  let result = 0;
  switch (op) {
    case "+":
      result = a + b;
      console.log(result.toFixed(2));
      break;
    case "-":
      result = a - b;
      console.log(result.toFixed(2));
      break;
    case "*":
      result = a * b;
      console.log(result.toFixed(2));
      break;
    case "/":
      result = a / b;
      console.log(result.toFixed(2));
      break;
  }
}
calculator(6, "+", 6);
