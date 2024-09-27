function needForSpeed(data) {
  let carsNum = data.shift();
  let cars = {};
  for (let i = 0; i < carsNum; i++) {
    let tokens = data.shift().split("|");
    let carModel = tokens[0];
    let milage = Number(tokens[1]);
    let fuelTank = Number(tokens[2]);

    cars[carModel] = {
      milage,
      fuelTank,
    };
    //console.log(carModel, cars[carModel]);
  }
  while (data != "Stop") {
    let tokens = data.shift().split(" : ");
    let command = tokens[0];
    let carModel = tokens[1];
    let milagePassed = Number(tokens[2]);
    let fuelConsumed = Number(tokens[3]);

    let car = cars[carModel];

    if (command == "Drive") {
      if (car.fuelTank >= fuelConsumed) {
        car.fuelTank -= fuelConsumed;
        car.milage += milagePassed;
        console.log(
          carModel,
          `driven for ${milagePassed} kilometers.`,
          fuelConsumed,
          `liters of fuel consumed.`
        );
        if (car.milage >= 100000) {
          console.log(`Time to sell the ${carModel}!`);
          delete cars[carModel];
        }
      } else {
        console.log(`Not enough fuel to make that ride`);
      }
    } else if (command == "Refuel") {
      let fullTank = Math.min(75 - car.fuelTank, milagePassed);
      car.fuelTank += milagePassed;
      if (car.fuelTank > 75) {
        car.fuelTank = 75;
      }
      console.log(`${carModel} refueled with ${fullTank} liters`);
    } else if (command == "Revert") {
      car.milage -= milagePassed;
      if (car.milage < 10000) {
        car.milage = 10000;
      }
      console.log(`${carModel} mileage decreased by ${milagePassed} kilometers`);
    }
  }
  for (let [key, value] of Object.entries(cars)) {
    console.log(
      `${key} -> Mileage: ${value.milage} kms, Fuel in the tank: ${value.fuelTank} lt.`
    );
  }
}
needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
// needForSpeed([
//   "4",
//   "Lamborghini Veneno|11111|74",
//   "Bugatti Veyron|12345|67",
//   "Koenigsegg CCXR|67890|12",
//   "Aston Martin Valkryie|99900|50",
//   "Drive : Koenigsegg CCXR : 382 : 82",
//   "Drive : Aston Martin Valkryie : 99 : 23",
//   "Drive : Aston Martin Valkryie : 2 : 1",
//   "Refuel : Lamborghini Veneno : 40",
//   "Revert : Bugatti Veyron : 2000",
//   "Stop",
// ]);
