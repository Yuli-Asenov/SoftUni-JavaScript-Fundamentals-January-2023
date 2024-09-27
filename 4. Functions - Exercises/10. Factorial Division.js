function factorialDivision(numA, numB) {
  let firstFactorialNumber = calcFactorial(numA);
  let secondFactorialNumber = calcFactorial(numB);

  result = firstFactorialNumber / secondFactorialNumber;

  function calcFactorial(num) {
    let res = 1;
    for (let i = num; i > 1; i -= 2) {
      res *= i * (i - 1);
    }
    return res;
  }
  console.log(result.toFixed(2));
}
factorialDivision(5, 2);
