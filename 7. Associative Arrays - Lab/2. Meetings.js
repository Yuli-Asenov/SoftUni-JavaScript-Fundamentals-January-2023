function meetings(input) {
  let schedule = {};
  for (let meet of input) {
    let tokens = meet.split(" ");
    let day = tokens[0];
    let person = tokens[1];
    if (schedule.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      schedule[day] = person;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (let day in schedule) {
    console.log(`${day} -> ${schedule[day]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
