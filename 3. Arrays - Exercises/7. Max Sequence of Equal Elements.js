function mySolution(arr) {
  let longestSeq = [];

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let currentSeq = [currNum];

    for (let j = i + 1; j < arr.length; j++) {
      let nextNum = arr[j];

      if (currNum === nextNum) {
        currentSeq.push(nextNum);
      } else {
        break;
      }
    }
    if (currentSeq.length > longestSeq.length) {
      longestSeq = currentSeq;
    }
  }

  console.log(longestSeq.join(" "));
}
mySolution([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
mySolution([1, 1, 1, 2, 3, 1, 3, 3]);
mySolution([4, 4, 4, 4]);
mySolution([0, 1, 1, 5, 2, 2, 6, 3, 3]);
