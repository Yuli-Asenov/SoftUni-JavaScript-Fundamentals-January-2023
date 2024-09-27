let myMap = new Map();

myMap.set("a5", 15);
myMap.set("b8", 13);

console.log(myMap.get("a5"));
console.log(myMap.has("a5"));
console.log(myMap.size);
myMap.delete("a5");
console.log(myMap.size);
myMap.clear();
console.log(myMap.size);
myMap.entries();
//Kluchovete v map-a - vinagi sa stringovi stoinosti
myMap.set("c13", 13);
myMap.set("d24", 14);

let iterable = myMap.keys();
for (let key of iterable) {
  console.log(`${key}`);
}

//Array.from - prevrushta map-a v masiv- i sled tova moje da go sortirame
let entries = Array.from(myMap.entries());
for (let [key, value] of entries) {
  console.log(`${key} -> ${value}`);
}
