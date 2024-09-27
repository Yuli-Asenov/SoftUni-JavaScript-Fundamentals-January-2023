function simpleCalculator(a, b, operator) {
  let result = 0;
  switch (operator) {
    case "add":
      result = a + b;
      console.log(result);
      break;
    case "subtract":
      result = a - b;
      console.log(result);
      break;
    case "multiply":
      result = a * b;
      console.log(result);
      break;
    case "divide":
      result = a / b;
      console.log(result);
      break;
  }
}
simpleCalculator(5, 10, "multiply");
