// function aMinerTask(data) {
//   let result = {};

//   for (let i = 0; i < data.length; i += 2) {
//     let resources = data[i];
//     let quantity = Number(data[i + 1]);
//     if (!result.hasOwnProperty(resources)) {
//       result[resources] = 0;
//     }
//     result[resources] += quantity;
//   }

//   for (let [resources, quantity] of Object.entries(result)) {
//     console.log(`${resources} -> ${quantity}`);
//   }
// }
// aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
// aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);

//Map

function aMinerTask(data) {
  let result = new Map();

  for (let i = 0; i < data.length; i += 2) {
    let resources = data[i];
    let quantity = Number(data[i + 1]);
    if (result.has(resources)) {
      let currentQuantity = result.get(resources);
      result.set(resources, currentQuantity + quantity);
    } else {
      result.set(resources, quantity);
    }
  }

  for (let [resources, quantity] of result) {
    console.log(`${resources} -> ${quantity}`);
  }
}
aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
