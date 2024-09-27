function processOddNumbers(arr) {
  let newArr = arr.filter((x, i) => i % 2 !== 0);
  let doubleArr = newArr.map((x) => x * 2);
  let result = [];
  for (let i = doubleArr.length; i >= 0; i--) {
    result.push(doubleArr[i]);
  }
  console.log(result.join(" "));
}
processOddNumbers([10, 15, 20, 25]);

//let newArr = arr.filter((x, i) => i % 2 !== 0).map(x => x * 2).reverse();
