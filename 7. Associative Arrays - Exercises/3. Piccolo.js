function piccoloMap(data) {
  let garage = new Map();

  for (let carData of data) {
    let [direction, carNumber] = carData.split(", ");
    if (direction === "IN") {
      garage.set(carNumber, "");
    } else {
      garage.delete(carNumber);
    }
  }
  let sort = Array.from(garage).sort((a, b) => a[0].localeCompare(b[0]));

  if (garage.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    for (let carNumber of sort) {
      console.log(carNumber[0]);
    }
  }
}
piccoloMap([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

//Set Method

// function piccoloSet(data) {
//   let garage = new Set();
//   for (let carData of data) {
//     let [direction, carNumber] = carData.split(", ");
//     if (direction === "IN") {
//       garage.add(carNumber);
//     } else {
//       garage.delete(carNumber);
//     }
//   }
//   let sort = Array.from(garage).sort((a, b) => a.localeCompare(b));

//   if (garage.size === 0) {
//     console.log("Parking Lot is Empty");
//   } else {
//     for (let carNumber of sort) {
//       console.log(carNumber);
//     }
//   }
// }
// piccoloSet([
//   "IN, CA2844AA",
//   "IN, CA1234TA",
//   "OUT, CA2844AA",
//   "IN, CA9999TT",
//   "IN, CA2866HI",
//   "OUT, CA1234TA",
//   "IN, CA2844AA",
//   "OUT, CA2866HI",
//   "IN, CA9876HH",
//   "IN, CA2822UU",
// ]);

//Set Method

// function solve2(arr) {
//   const parkingLot = new Set();

//   for (const entry of arr) {
//     const [dir, plate] = entry.split(", ");

//     switch (dir) {
//       case "IN": {
//         parkingLot.add(plate);
//         break;
//       }
//       case "OUT": {
//         parkingLot.delete(plate);
//         break;
//       }
//     }
//   }

//   if (parkingLot.size > 0) {
//     [...parkingLot]
//       .sort((a, b) => a.localeCompare(b))
//       .forEach((carNumber) => {
//         console.log(carNumber);
//       });
//   } else {
//     console.log("Parking Lot is Empty");
//   }
// }
