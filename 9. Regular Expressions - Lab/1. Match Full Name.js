function matchFullName(input) {
  let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let regex2 = new RegExp(`/\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm`);

  let result1 = input.match(regex);
  console.log(result1.join(" "));
}
matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan   Ivanov"
);
