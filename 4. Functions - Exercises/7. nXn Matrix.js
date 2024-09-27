function nXnMatrix(n) {
  for (let i = 0; i < n; i++) {
    let buff = "";
    for (let j = 0; j < n; j++) {
      buff += n + " ";
    }
    console.log(buff);
  }
}
nXnMatrix(3);
