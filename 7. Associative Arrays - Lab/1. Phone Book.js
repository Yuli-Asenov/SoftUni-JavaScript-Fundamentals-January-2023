function phoneBook(input) {
  let book = {};
  input.forEach((el) => {
    let [name, phone] = el.split(" ");
    book[name] = phone;
  });
  for (const key in book) {
    console.log(`${key} -> ${book[key]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);

//Map Solution
// function phoneBook(input) {
//   let book = new Map();
//   input.forEach((el) => {
//     let [name, phone] = el.split(" ");
//     book.set(name, phone);
//     // if (book.has(name)) {
//     //   let currentPhone = book.get(phone);
//     //   book.set(name, (currentPhone = phone));
//     // } else {
//     //   book.set(name, phone);
//     // }
//   });

//   // for (const [key, value] of book) {
//   //   console.log(`${key} -> ${value}`);
//   // }
//   //Or This
//   let keys = book.keys();
//   for (const key of keys) {
//     console.log(`${key} -> ${book.get(key)}`);
//   }
// }
// phoneBook([
//   "Tim 0834212554",
//   "Peter 0877547887",
//   "Bill 0896543112",
//   "Tim 0876566344",
// ]);
