function catalogue(data) {
  let result = {};

  for (let line of data) {
    let [name, price] = line.split(" : ");

    let groupChar = name[0];
    if (result.hasOwnProperty(groupChar)) {
      result[groupChar].push({ name, price: Number(price) });
    } else {
      result[groupChar] = [];
      result[groupChar].push({ name, price: Number(price) });
    }
  }
  let sortKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));

  for (let key of sortKeys) {
    console.log(key);
    let sortValue = result[key].sort((a, b) => a.name.localeCompare(b.name));
    for (let product of result[key]) {
      console.log(`  ${product.name}: ${product.price}`);
    }
  }

  //Easy aproach -----

  //let firstKey = sortKeys[0];
  //let groupChar = "";

  //for(let key of sortKeys){
  //let name = key;
  //if(groupChar !== name[0]){
  //groupChar = name[0];
  //console.log(groupChar);
  //}
  //let price = result[key];
  //console.log(`  ${name}: ${price}`);
  //}
}
catalogue([
  "Appricot : 20.4",

  "Fridge : 1500",

  "TV : 1499",

  "Deodorant : 10",

  "Boiler : 300",

  "Apple : 1.25",

  "Anti-Bug Spray : 15",

  "T-Shirt : 10",
]);
