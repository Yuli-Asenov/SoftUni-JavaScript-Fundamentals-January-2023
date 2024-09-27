function stringSubstring(word, text) {
  word = word.toLowerCase();
  let textArr = text.split(" ");
  let isFound = false;

  for (let el of textArr) {
    el = el.toLowerCase();
    // if(el.includes(word)){
    //     console.log(word);
    //     isFound = true;
    //     break;
    // }

    if (el.toLowerCase() === word) {
      console.log(word);
      isFound = true;
      break;
    }
  }
  if (isFound === false) {
    console.log(`${word} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
