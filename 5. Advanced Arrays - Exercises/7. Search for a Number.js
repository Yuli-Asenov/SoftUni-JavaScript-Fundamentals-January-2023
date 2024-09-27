function searchForANumber(arr, arr1) {
  let elementsN = Number(arr1[0]);
  let deleteCount = Number(arr1[1]);
  let searchedN = Number(arr1[2]);
  let cycleCount = 0;
  let el = 0;

  let newArr = arr.splice(0, elementsN - 0);
  for (let i = 0; i < deleteCount; i++) {
    let deletedArr = newArr.shift(deleteCount);
  }

  for (let el of newArr) {
    if (el === searchedN) {
      cycleCount++;
      //console.log(`Number ${el} occurs ${cycleCount} times.`);
    }
  }
  console.log(`Number ${searchedN} occurs ${cycleCount} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
