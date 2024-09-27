function companyUsers(data) {
  let result = {};
  for (let el of data) {
    let [name, id] = el.split(" -> ");
    if (!result.hasOwnProperty(name)) {
      result[name] = [];
    }
    result[name].push(id);
  }

  let entries = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

  entries.forEach((el) => {
    let name = el[0];
    let id = el[1];
    console.log(name);
    let uniqueIDs = new Set(id);
    for (let id of uniqueIDs) {
      console.log(`-- ${id}`);
    }
  });
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
