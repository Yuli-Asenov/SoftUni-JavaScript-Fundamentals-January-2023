function pirates(data) {
  let linesOfData = data.shift();
  let targets = {};

  while (linesOfData !== "Sail") {
    let [city, population, gold] = linesOfData.split("||");
    if (!targets.hasOwnProperty(city)) {
      targets[city] = [Number(population), Number(gold)];
    } else {
      targets[city][0] += Number(population);
      targets[city][1] += Number(gold);
    }
    linesOfData = data.shift();
  }
  linesOfData = data.shift();
  while (linesOfData !== "End") {
    let [command, city, population, gold] = linesOfData.split("=>");
    if (command == "Plunder") {
      targets[city][0] -= Number(population);
      targets[city][1] -= Number(gold);
      console.log(
        `${city} plundered! ${gold} gold stolen, ${population} citizens killed.`
      );
      if (targets[city][0] <= 0 || targets[city][1] <= 0) {
        console.log(`${city} has been wiped off the map!`);
        delete targets[city];
      }
    }
    if (command == "Prosper") {
      let gold = Number(population);
      if (gold > 0) {
        targets[city][1] += gold;
        console.log(
          `${gold} gold added to the city treasury. ${city} now has ${targets[city][1]} gold.`
        );
      } else {
        console.log(`Gold added cannot be a negative number!`);
      }
    }
    linesOfData = data.shift();
  }
  let cityCount = Object.values(targets).length;
  if (cityCount <= 0) {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
  } else {
    console.log(
      `Ahoy, Captain! There are ${cityCount} wealthy settlements to go to:`
    );
    for (let [key, value] of Object.entries(targets)) {
      console.log(
        `${key} -> Population: ${value[0]} citizens, Gold: ${value[1]} kg`
      );
    }
  }
}

// pirates([
//   "Tortuga||345000||1250",
//   "Santo Domingo||240000||630",
//   "Havana||410000||1100",
//   "Sail",
//   "Plunder=>Tortuga=>75000=>380",
//   "Prosper=>Santo Domingo=>180",
//   "End",
// ]);
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
