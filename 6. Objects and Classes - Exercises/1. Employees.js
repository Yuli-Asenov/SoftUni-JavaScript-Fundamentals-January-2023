function employees(data) {
  let obj = {};
  for (let name of data) {
    obj[name] = name.length;
  }
  for (let key of Object.keys(obj)) {
    console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
  }

  //console.log("----");

  //   let res = [];
  //   for (let name of data) {
  //     let myInfo = {
  //       name: name,
  //       personalNumber: name.length,
  //     };
  //     res.push(myInfo);
  //   }
  //   for (let obj of res) {
  //     console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
  //   }
}
employees([
  "Silas Butler",
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
