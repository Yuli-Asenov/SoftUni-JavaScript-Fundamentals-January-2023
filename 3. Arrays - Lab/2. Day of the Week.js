function dayOfTheWeek(num) {
  let dayOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (num < 1 || num > 7) {
    console.log("Invalid day!");
  } else {
    console.log(dayOfTheWeek[num - 1]);
  }
}
dayOfTheWeek(7);
