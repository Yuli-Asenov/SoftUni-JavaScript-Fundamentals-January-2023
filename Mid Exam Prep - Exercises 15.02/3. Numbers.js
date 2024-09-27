function numbers(input) {
  let newArr = input.split(" ");
  let sum = 0;

  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = Number(newArr[i]);
    sum += newArr[i];
  }
  let avg = sum / newArr.length;

  let avgArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > avg) {
      avgArr.push(newArr[i]);
    }
  }
  let result = [];
  avgArr.sort((a, b) => b - a);
  for (let i = 0; i < 5; i++) {
    result.push(avgArr[i]);
  }

  if (avgArr <= 0) {
    console.log("No");
  }
  console.log(result.join(" "));
}
numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1");
numbers("-1 -2 -3 -4 -5 -6");
