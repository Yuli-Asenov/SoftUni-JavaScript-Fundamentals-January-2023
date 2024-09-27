function magicSum(arr, magicNum) {
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let magicSum = currNum + arr[j];
      if (magicSum === magicNum) {
        console.log(arr[i] + ` ` + arr[j]);
      }
    }
  }
}
//magicSum([1, 7, 6, 2, 19, 23],8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
//magicSum([1, 2, 3, 4, 5, 6],6);

//Alt

//function magic(a,b) {
//    let duplicatearray = []
//    for (let i = 0; i < a.length - 1; i++) {
//        for (let j = i + 1; j < a.length; j++){
//            if (Number(a[i]) + Number(a[j]) === Number(b) && i !== j && !duplicatearray.includes(a[i]) && !duplicatearray.includes(a[j])){
//                console.log(a[i] + ` ` + a[j]);
//                duplicatearray.push(a[i],a[j])
//            }
//        }
//    }
//}
