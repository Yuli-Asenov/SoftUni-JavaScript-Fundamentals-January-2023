function triangleOfNumbers(num) {
  for (let row = 1; row <= num; row++) {
    let buff = "";
    for (let column = 1; column <= row; column++) {
      buff += row + "" + " ";
    }
    console.log(buff);
  }
}
triangleOfNumbers(3);
