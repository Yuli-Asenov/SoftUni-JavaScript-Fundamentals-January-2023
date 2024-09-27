function computerStore(input) {
  let sum = 0;
  let taxes = 0;
  let index = 0;
  let discount = 0;
  let command = input[index];
  //let command = input.shift();

  while (command !== "regular") {
    if (command === "special") {
      break;
    }
    index++;
    let price = Number(command);
    if (price < 0) {
      console.log("Invalid price!");
      //index++;
      //command = input.shift();
      command = input[index];
      continue;
    }
    sum += price;
    command = input[index];
    //command = input.shift();
  }
  if (sum === 0) {
    console.log(`Invalid order!`);
  } else {
    taxes = sum * 0.2;
    if (command === "special") {
      discount = (sum + taxes) * 0.9;
    } else if (command === "regular") {
      discount = sum + taxes;
    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${discount.toFixed(2)}$`);
  }
}
//computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
//computerStore(["regular"]);
//chuva se samo kogato govorish vijda se postoqnno :D:D - troll s tosho
// as na ispit nqma da hodq ne me puskat za vas e podgotovkata
// ctrl i hoover na funkciq za da q prochetem
