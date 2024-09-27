function printAndSum(start, end) {
  let sum = 0;
  let s = "";
  for (let i = start; i <= end; i++) {
    sum += i;
    s += i + " ";
    if (i === 10) {
      ("");
    }
  }
  console.log(s);
  //console.log(s+"\n");
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
