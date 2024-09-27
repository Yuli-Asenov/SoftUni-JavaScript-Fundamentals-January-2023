// function lastKNumsSequence(n, k) {
//   let sequence = [1];

//   for (let current = 1; current < n; current++) {
//     let start = Math.max(0, current - k);
//     let end = current;
//     let previousK = sequence.slice(start, end);
//     let sum = 0;
//     for (let i = 0; i < previousK.length; i++) {
//       sum += previousK[i];
//     }
//     sequence[current] = sum;
//   }
//   console.log(sequence.join(" "));
//   return sequence.join(" ");
// }
// lastKNumsSequence(6, 3);
// lastKNumsSequence(8, 2);

//Kostadinov Solution
//----
//create result array containing 1
//repeat n-times
//take last k elements from result array
//sum elements
//add sum to array
//print result

function lastKSequence(n, k) {
  let result = [1];
  for (let i = 1; i < n; i++) {
    let lastK = result.slice(-k);
    let sum = 0;
    for (let el of lastK) {
      sum += el;
    }
    result.push(sum);
  }
  console.log(result.join(" "));
}
lastKSequence(6, 3);
lastKSequence(8, 2);
