function makeADictionary(dataAsJSON) {
  let myCollection = {};

  for (let line of dataAsJSON) {
    let obj = JSON.parse(line);
    let keys = Object.keys(obj);
    let key = keys[0];
    myCollection[key] = obj[key];
  }

  let sortKey = Object.keys(myCollection).sort((keyA, keyB) =>
    keyA.localeCompare(keyB)
  );

  for (let key of sortKey) {
    console.log(`Term: ${key} => Definition: ${myCollection[key]}`);
  }
}
makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road,typically one serving the public on a fixed route and for afare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}',
]);
