function convertToObject(person) {
  for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }
}
convertToObject({ name: "George", age: 40, town: "Sofia" });
