function guineaPig(input) {
  //1 read input
  let foodKg = Number(input.shift());
  let hayKg = Number(input.shift());
  let coverKg = Number(input.shift());
  let weightKg = Number(input.shift());
  let hasToGoToTheStore = false;

  for (let i = 1; i <= 30; i++) {
    //2 modify food amount
    foodKg = foodKg - 0.3;
    //3 modify hay every 2nd day
    if (i % 2 === 0) {
      hayKg -= foodKg * 0.05;
    }
    //4 modify cover every third day
    if (i % 3 === 0) {
      coverKg -= weightKg / 3;
    }
    if (foodKg <= 0 || hayKg <= 0 || coverKg <= 0) {
      hasToGoToTheStore = true;
      break;
    }
  }
  if (hasToGoToTheStore === true) {
    console.log(`Merry must go to the pet store!`);
  } else {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(
        2
      )}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`
    );
  }
}
guineaPig(["10", "5", "5.2", "1"]);
