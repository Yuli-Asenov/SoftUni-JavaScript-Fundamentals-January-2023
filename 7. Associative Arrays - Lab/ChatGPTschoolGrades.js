function storeGrades(data) {
    // Create an empty object to store the student grades
    let grades = {};
  
    // Loop through the input data
    data.forEach((d) => {
      // Split each string into name and grades
      let [name, ...gradesList] = d.split(" ");
  
      // Convert grades to numbers
      gradesList = gradesList.map(Number);
  
      // If the student is already in the object, add new grades to existing ones
      if (grades[name]) {
        grades[name] = [...grades[name], ...gradesList];
      }
      // Otherwise, create a new entry in the object
      else {
        grades[name] = gradesList;
      }
    });
  
    // Calculate the average grades for each student and store them in a new object
    let averages = {};
    Object.keys(grades).forEach((name) => {
      let gradeSum = grades[name].reduce((acc, cur) => acc + cur, 0);
      let gradeAvg = gradeSum / grades[name].length;
      averages[name] = gradeAvg;
    });
  
    // Sort the object by student name
    let sorted = Object.keys(averages).sort();
  
    // Print the sorted list of students and their average grades
    sorted.forEach((name) => {
      console.log(`${name}: ${averages[name].toFixed(2)}`);
    });
  }
storeGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
storeGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);