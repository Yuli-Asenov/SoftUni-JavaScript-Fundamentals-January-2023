function oddAndEvenSum(num) {
  let oddSum = 0;
  let evenSum = 0;
  let str = num.toString();

  for (i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      evenSum += Number(str[i]);
    } else if (str[i] % 2 === 1) {
      oddSum += Number(str[i]);
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
