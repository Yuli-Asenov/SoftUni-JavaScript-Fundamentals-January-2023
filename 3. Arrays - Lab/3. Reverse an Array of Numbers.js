function reverseAnArrayOfNumbers(num, arr) {
  let arr1 = [];
  let arr2 = [];
  let output = "";
  for (let i = 0; i < num; i++) {
    arr1.push(arr[i]);
    //console.log(arr1);
  }
  for (let j = arr1.length - 1; j >= 0; j--) {
    //arr2 = [];
    arr2.push(arr1[j]);
    //console.log(arr2);
  }
  console.log(`${arr2.join(" ")}`);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
