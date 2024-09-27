function theImitationGame(input) {
  let secretWord = input.shift();
  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split("|");
    let command = tokens[0];

    switch (command) {
      case "ChangeAll": {
        let old = tokens[1];
        let newWord = tokens[2];
        while (secretWord.includes(old)) {
          secretWord = secretWord.replace(old, newWord);
        }
        break;
      }
      case "Move": {
        let number = tokens[1];
        let secretWordChar = secretWord.substring(0, number);
        secretWord = secretWord.slice(number) + secretWordChar;
        break;
      }
      case "Insert": {
        let number = tokens[1];
        let newWord = tokens[2];
        secretWord =
          secretWord.substring(0, number) + newWord + secretWord.substring(number);
        break;
      }
      case "Decode": {
        console.log(`The decrypted message is: ${secretWord}`);
        break;
      }
    }
  }
}
// theImitationGame([
//   "owyouh",
//   "Move|2",
//   "Move|3",
//   "Insert|3|are",
//   "Insert|9|?",
//   "Decode",
// ]);
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
