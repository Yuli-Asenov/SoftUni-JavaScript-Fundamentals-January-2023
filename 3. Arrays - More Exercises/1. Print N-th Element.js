function printNthElement(arr) {
  let arr1 = [];
  let arr2 = [];
  arr1 = arr.splice(-1);
  n = Number(arr1);
  for (let i = 0; i < arr.length; i++) {
    if (i % n === 0) {
      arr2.push(arr[i]);
    }
  }
  console.log(arr2.join(" "));
}
printNthElement(["dsa", "asd", "test", "test", "2"]);
//['1', '2', '3', '4', '5', '6']
//['5', '20', '31', '4', '20', '2']
//['dsa', 'asd', 'test', 'test', '2']
