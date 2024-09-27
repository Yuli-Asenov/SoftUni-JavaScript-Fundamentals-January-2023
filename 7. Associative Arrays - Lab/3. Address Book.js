function sortAdressbook(input) {
  let book = {};
  for (let el of input) {
    let [name, adress] = el.split(":");
    book[name] = adress;
  }
  let entries = Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]));
  for (let [name, adress] of entries) {
    console.log(`${name} -> ${adress}`);
  }
}
sortAdressbook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
//localeCompare - sortira stringove
//a[0] - b[0] - sortira po klucha
//a[1] - b[1] - sortira po stoinostta

//Sortirane samo po kluchovete
// let keys = Object.keys(book).sort((a, b) => a.localeCompare(b));
// for (let name of keys) {
//   console.log(`${name} -> ${adress[name]}`);
// }
