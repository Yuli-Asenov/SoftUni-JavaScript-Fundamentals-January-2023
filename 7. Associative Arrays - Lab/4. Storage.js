function storage(input) {
  let store = new Map();
  for (let el of input) {
    let [item, quantity] = el.split(" ");
    quantity = Number(quantity);
    if (store.has(item)) {
      let currentQuantity = store.get(item);
      store.set(item, currentQuantity + quantity);
    } else {
      store.set(item, quantity);
    }
  }
  for (let [key, value] of store) {
    console.log(`${key} -> ${value}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
