function theatrePromotions(typeOfDay, age) {
  switch (typeOfDay) {
    case "Weekday":
      if (age >= 0 && age <= 18) {
        console.log("12$");
      } else if (age <= 64) {
        console.log("18$");
      } else if (age <= 122) {
        console.log("12$");
      } else if (age < 0 || age > 122) {
        console.log("Error!");
      }
      break;
    case "Weekend":
      if (age >= 0 && age <= 18) {
        console.log("15$");
      } else if (age <= 64) {
        console.log("20$");
      } else if (age <= 122) {
        console.log("15$");
      } else if (age < 0 || age > 122) {
        console.log("Error!");
      }
      break;
    case "Holiday":
      if (age >= 0 && age <= 18) {
        console.log("5$");
      } else if (age <= 64) {
        console.log("12$");
      } else if (age <= 122) {
        console.log("10$");
      } else if (age < 0 || age > 122) {
        console.log("Error!");
      }
      break;
    default:
      console.log("Error!");
      break;
  }
}
theatrePromotions("Weekday", -1);
