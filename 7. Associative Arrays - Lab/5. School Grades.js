// function schoolGrades(studentAndGrades) {
//   let result = new Map();
//   for (let data of studentAndGrades) {
//     let tokens = data.split(" ");
//     let name = tokens.shift();
//     let setOfGrade = tokens;
//     if (!result.has(name)) {
//       result.set(name, setOfGrade);
//     } else {
//       let oldSetOfGrade = result.get(name);
//       for (let grade of setOfGrade) {
//         oldSetOfGrade.push(grade);
//       }
//       result.set(name, oldSetOfGrade);
//     }
//   }
//   let sorted = Array.from(result.entries()).sort(
//     ([keyA, valueA], [keyB, valueB]) => {
//       return keyA.localeCompare(keyB);
//     }
//   );
//   for (let [key, value] of sorted) {
//     let sumGrade = 0;
//     for (grade of value) {
//       sumGrade += Number(grade);
//     }
//     let avg = sumGrade / value.length;
//     console.log(`${key}: ${avg.toFixed(2)}`);
//   }
// }
// schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
// schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);

function schoolGrades(studentAndGrades) {
  let result = new Map();
  //For every entry
  for (let data of studentAndGrades) {
    //Parse and convert numbers
    let tokens = data.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);
    //Ensure grades Array always exists
    if (!result.has(name)) {
      result.set(name, []);
    }
    //Find existing grades and add new grades
    let existing = result.get(name);
    for (let grade of grades) {
      existing.push(grade);
    }
  }
  let sorted = Array.from(result).sort((a, b) => a[0].localeCompare(b[0]));
  for (let [name, grades] of sorted) {
    let avg = 0;
    for (let grade of grades) {
      avg += grade;
    }
    average = avg / grades.length;
    console.log(`${name}: ${average.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
// schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
