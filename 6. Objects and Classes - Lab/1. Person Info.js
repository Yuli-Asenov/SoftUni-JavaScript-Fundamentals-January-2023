function personInfo(firstName, lastName, age) {
  let myPersonInfo = { firstName: firstName, lastName: lastName, age: age };
  //let myPersonInfo = {firstName,lastName,age} - validno

  myPersonInfo.firstName = firstName; // - edno i sushto
  myPersonInfo.lastName = lastName; // - edno i sushto
  myPersonInfo.age = age; // - edno i sushto

  //myPersonInfo = {firstName, lastName, age};// - short hand syntaxis - moje i taka
  return myPersonInfo;
}
console.log(personInfo("Peter", "Pan", "20"));
