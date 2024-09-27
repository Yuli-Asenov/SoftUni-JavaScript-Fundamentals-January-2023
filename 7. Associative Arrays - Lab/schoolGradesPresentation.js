function schoolGrades(studentAndGrades) {
  let map = new Map();

  for (let data of studentAndGrades) {
    let tokens = data.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);
    if (!map.has(name)) {
      map.set(name, []);
    }
    for (let grade of grades) {
      map.get(name).push(grade);
    }
  }
  let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [key, value] of sorted) {
    let sumGrade = 0;
    for (grade of value) {
      sumGrade += Number(grade);
    }
    let avg = sumGrade / value.length;
    console.log(`${key}: ${avg.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
