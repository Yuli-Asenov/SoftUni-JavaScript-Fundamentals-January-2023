function sorting(input) {
  let sortArr = input.sort((a, b) => b - a);
  let result = [];
  for (let i = 0; i < input.length / 2; i++) {
    result.push(sortArr[i]);
    if (sortArr.length % 2 === 1 && (sortArr.length - 1) / 2 === i) {
      result.push(sortArr[sortArr.length - 1 - i]);
    } else if (sortArr.length % 2 === 0) {
      result.push(sortArr[sortArr.length - 1 - i]);
    }
  }
  console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 6, 32, 7, 19, 47]);

function sorting(input) {
  let sortArr = JSON.parse(JSON.stringify(input.sort((a, b) => b - a)));
  let result = [];
  for (let i = 0; i < input.length / 2; i++) {
    result.push(sortArr[i]);
    result.push(sortArr[sortArr.length - 1 - i]);
  }
  console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);

function sort(arr) {
  arr.sort((a, b) => a - b);

  let sorted = [];
  while (arr.length !== 0) {
    sorted.push(arr.pop());
    sorted.push(arr.shift());
  }
  console.log(sorted.join(" "));
}
// sort();
