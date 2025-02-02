function train(input) {
  let wagons = input
    .shift()
    .split(" ")
    .map((el) => Number(el));

  let maxCapacity = Number(input.shift());

  for (let el of input) {
    let command = el.split(" "); // "add 10" -> ["add" , "10"] // 30 -> ["30"]
    if (command[0] === "Add") {
      wagons.push(Number(command[1]));
    } else {
      let passengers = Number(command[0]);
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + passengers <= maxCapacity) {
          wagons[i] += passengers;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
  //console.table(wagons);
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
