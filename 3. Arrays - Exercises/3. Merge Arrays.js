function mergeArrays(firstArr, secondArr) {
  let result = [];
  for (i = 0; i < firstArr.length; i++) {
    let valueA = firstArr[i];
    let valueB = secondArr[i];
    if (i % 2 === 0) {
      valueA = Number(valueA);
      valueB = Number(valueB);
    }
    let currentResult = valueA + valueB;
    result.push(currentResult);
  }
  let buff = "";
  for (let el of result) {
    buff += el + " - ";
  }
  console.log(result.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
