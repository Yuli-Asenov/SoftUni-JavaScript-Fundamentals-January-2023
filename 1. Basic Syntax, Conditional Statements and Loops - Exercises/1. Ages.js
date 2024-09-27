function ages(age) {
  if (age < 0) {
    console.log("out of bounds");
  } else if (age >= 0 && age <= 2) {
    console.log("baby");
  } else if (age <= 13) {
    console.log("child");
  } else if (age <= 19) {
    console.log("teenager");
  } else if (age <= 65) {
    console.log("adult");
  } else {
    console.log("elder");
  }
}
ages([1]);
ages([3]);
ages([19]);
ages([30]);
ages([40]);
ages([66]);
ages([-1]);
