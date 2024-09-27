function oddOccurrences(input) {
  let words = input.split(" ").map((el) => el.toLowerCase());
  let result = {};

  result = words.reduce((acc, cur, i) => {
    if (!acc.hasOwnProperty(cur)) {
      acc[cur] = 1;
    } else {
      acc[cur]++;
    }
    return acc;
  }, {});

  result = Object.entries(result)
    .filter(([word, value]) => {
      if (value % 2 !== 0) {
        return word;
      }
    })
    .map((el) => el[0]);

  console.log(result.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

function oddOccurrences(input) {
  //convert input to array
  let words = input.split(" ");
  let result = {};
  //for every element of input array
  for (let word of words) {
    //count word as lowercase
    word = word.toLocaleLowerCase();
    if (result.hasOwnProperty(word)) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  let filtered = Object.entries(result).filter(([word, count]) => {
    if (count % 2 == 1) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filtered.map((el) => el[0]).join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
