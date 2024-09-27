function theImitationLector(data) {
  let text = data.shift();
  for (let line of data) {
    if (line === "Decode") {
      break;
    }
    let tokens = line.split("|");
    let action = tokens[0];

    switch (action) {
      case "Move": {
        let n = Number(tokens[1]);
        for (let i = 0; i < n; i++) {
          let firstLetter = text.substring(0, 1);
          let anotherLetter = text.substring(1);
          text = anotherLetter + firstLetter;
        }
        break;
      }
      case "Insert": {
        let index = Number(tokens[1]);
        let value = tokens[2];
        text = text.substring(0, index) + value + text.substring(index);
        break;
      }
      case "ChangeAll": {
        let old = tokens[1];
        let newLetter = tokens[2];
        while (text.includes(old)) {
          text = text.replace(old, newLetter);
        }
        break;
      }
    }
  }
  console.log(`The decrypted message is: ${text}`);
}
theImitationLector([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
theImitationLector(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
