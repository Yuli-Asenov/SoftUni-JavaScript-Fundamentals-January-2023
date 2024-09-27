function addAndRemove(arr) {
  let emptyArr = [];
  let startN = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      emptyArr.push(startN);
      //startN++;
    } else if (arr[i] === "remove") {
      emptyArr.pop(startN);
      //startN++;
    }
    startN++;
  }
  if (emptyArr.length === 0) {
    console.log("Empty");
  }
  console.log(emptyArr.join(" "));
}
addAndRemove(["add", "add", "add", "add"]);
console.log("-----------");
addAndRemove(["add", "add", "remove", "add", "add"]);
console.log("-----------");
addAndRemove(["remove", "remove", "remove", "remove", "remove"]);
