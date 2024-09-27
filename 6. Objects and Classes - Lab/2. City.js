function city(obj) {
  //   for (let key of Object.keys(obj)) {
  //     console.log(`${key} -> ${obj[key]}`);
  //   }

  //for(let el of Object.entries(obj)){
  //console.log(`${el[0]} -> ${el[1]}`);
  //}

  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} -> ${value}`);
  }
}
city({
  name: "Sofia",
  area: "492",
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});