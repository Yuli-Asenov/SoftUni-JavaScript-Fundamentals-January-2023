let myKey = "fox-trot";
let myAssocArr = {
  alpha: 1,
  beta: 2,
  gamma: 3,
  [myKey]: 10,
};
let alpha = 5;

let assocArr = {};
assocArr["one"] = 1;
assocArr["two"] = 2;
assocArr["three"] = 3;

//For in
for (let key in assocArr) {
  console.log(key, assocArr[key]);
  console.log(key + " = " + assocArr[key]);
}
//key = key
//assocArr[key] = value

//For of
for (let key of Object.keys(assocArr)) {
  console.log(key, assocArr[key]);
  console.log(key + " = " + assocArr[key]);
}

//hasOwnProperty and delete
console.log(myAssocArr.hasOwnProperty("alpha"));
delete myAssocArr["alpha"];
myAssocArr["alpha"] = undefined;
//sus undefined stoinostta stava na undefined toest nqma no klucha si stoi
// a sus delete i klucha i stoinostta se trie
console.log(myAssocArr.hasOwnProperty("alpha"));
//Object.entries - vrushta masiv
