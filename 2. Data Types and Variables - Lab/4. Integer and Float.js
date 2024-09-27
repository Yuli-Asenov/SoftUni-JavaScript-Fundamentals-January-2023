function rightPlace(n1, n2, n3) {
  let sum = n1 + n2 + n3;
  if (sum % 1 === 0) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}
rightPlace(9, 100, 1.1);
