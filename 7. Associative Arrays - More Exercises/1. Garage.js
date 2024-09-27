//My Solve
function garage(data) {
  result = {};
  for (let line of data) {
    let tokens = line.split(" -");
    let garageNum = tokens.shift();
    let garageInfo = tokens;
    if (!result.hasOwnProperty(garageNum)) {
      result[garageNum] = [];
    }
    result[garageNum].push(garageInfo);
  }
  for (let [garageNum, garageInfo] of Object.entries(result)) {
    console.log(`Garage № ${garageNum}`);
    let uniqueInfo = new Set(garageInfo);
    for (let info of uniqueInfo) {
      info = info.toString().replace(/: /g, " - ");
      console.log(`---${info}`);
    }
  }
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);

//Map

// function garage(data) {
//   result = new Map();
//   for (let line of data) {
//     let [garageNum, garageInfo] = line.split(" -");
//     if (!result.has(garageNum)) {
//       result.set(garageNum, [garageInfo]);
//     } else {
//       let cars = result.get(garageNum);
//       cars.push(garageInfo);
//       result.set(garageNum, cars);
//     }
//   }
//   let sorted = [...result.entries()].sort((a, b) => a[0] - b[0]);
//   let output = " ";
//   for (let [garageNum, garageInfo] of sorted) {
//     //console.log(`Garage № ${garageNum}`);
//     output += `Garage № ${garageNum}\n`;
//     //let uniqueInfo = new Set(garageInfo);
//     for (let currentInfo of garageInfo) {
//       currentInfo = currentInfo.replace(/: /g, " - ");
//       //console.log(`---${currentInfo}`);
//       output += `---${currentInfo}\n`;
//     }
//   }
//   console.log(output);
// }
// garage([
//   "1 - color: blue, fuel type: diesel",
//   "1 - color: red, manufacture: Audi",
//   "2 - fuel type: petrol",
//   "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
// ]);
