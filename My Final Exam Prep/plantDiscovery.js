function plantDiscovery(data) {
  let plantsNum = Number(data.shift());
  let plants = {};
  for (let i = 0; i < plantsNum; i++) {
    let tokens = data.shift().split("<->");
    let plantType = tokens[0];
    let rarity = Number(tokens[1]);

    plants[plantType] = {
      rarity,
      rating: 0,
      count: 0,
    };
  }
  while (data != "Exhibition") {
    let newData = data.shift();

    newData = newData.split(": ");
    let [command, plantTypeSome] = [...newData];
    plantTypeSome = plantTypeSome.split(" - ");
    let [plantType, givenRating] = [...plantTypeSome];

    if (plants.hasOwnProperty(plantType)) {
      if (command == "Rate:") {
        let counter = 1;
        plants[plantType].count += counter;
        plants[plantType].rating += givenRating;
        //plants[plantType].rating.push(givenRating);
      } else if (command == "Update:") {
        plants[plantType].rarity = givenRating;
      } else if (command == "Reset:") {
        plants[plantType].rating = [];
      }
    } else {
      console.log("error");
    }
  }
  console.log(`Plants for the exhibition:`);
  // for (let [key, value] of Object.entries(plants)) {
  //   // let avgRating = value.rating / value.rating.length;
  //   // value.rating = avgRating.toFixed(2);
  //   // //value.rating = value.rating.toFixed(2);
  //   console.log(`- ${key}; Rarity: ${value.rarity}; Rating: ${value.rating}`);
  // }
  for (const key in plants) {
    let average = plants[key][`rating`] / plants[key][`count`] || 0;
    console.log(
      ` - ${key}; Rarity: ${plants[key][`rarity`]}; Rating: ${average.toFixed(2)}`
    );
  }
}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
