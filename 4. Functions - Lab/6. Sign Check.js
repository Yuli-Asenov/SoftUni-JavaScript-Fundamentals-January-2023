function signCheck(n1, n2, n3) {
  let sign = "Positive";
  let isNum1Negative = n1 < 0;
  sign = chackAndChangeSigh(sign, isNum1Negative);
  let isNum2Negative = n2 < 0;
  sign = chackAndChangeSigh(sign, isNum2Negative);
  let isNum3Negative = n3 < 0;
  sign = chackAndChangeSigh(sign, isNum3Negative);

  function chackAndChangeSigh(sign, shouldChange) {
    if (shouldChange === false) {
      return sign;
    }
    if (sign === "Positive") {
      sign = "Negative";
    } else {
      sign = "Positive";
    }
    return sign;
  }
  console.log(sign);
}
signCheck(5, 12, -15);
