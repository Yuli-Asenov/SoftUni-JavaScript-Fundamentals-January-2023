// function firstAndLastKNumbers(input) {
//   let arr = input.splice(1);
//   let k = input.slice(0);
//   let result = [];
//   let result1 = [];
//   for (let i = 0; i < k; i++) {
//     result.push(arr[i]);
//   }
//   for (let j = arr.length - k; j < arr.length; j++) {
//     result1.push(arr[j]);
//   }
//   console.log(result.join(" "));
//   console.log(result1.join(" "));
// }
// firstAndLastKNumbers([3, 6, 7, 8, 9]);

//Kostadinov Solution

function firstLastK(arr) {
  let k = arr.shift();

  let firstK = arr.slice(0, k);
  let lastK = arr.slice(-k);
  console.log(firstK.join(" "));
  console.log(lastK.join(" "));
}
firstLastK([2, 7, 8, 9]);
firstLastK([3, 6, 7, 8, 9]);
