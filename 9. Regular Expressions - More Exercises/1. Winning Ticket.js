function winningTicket(input) {
  let tickets = input.split(", ");

  let regex = /(([@#\$^]{6,10}))/gm;

  for (let ticket of tickets) {
    ticket = ticket.trim();
    if (ticket.length !== 20) {
      console.log(`Invalid ticket`);
      continue;
    }
    let leftHalf = ticket.slice(0, 10);
    let rightHalf = ticket.slice(10, 20);

    let matchLeft = leftHalf.match(regex);
    let matchRight = rightHalf.match(regex);

    if (matchLeft && matchRight && matchLeft[0][0] === matchRight[0][0]) {
      let matchLength = Math.min(matchLeft[0].length, matchRight[0].length);

      if (matchLength === 10 || matchLength === 10) {
        console.log(
          `ticket "${ticket}" - ${matchLength}${matchLeft[0][0]} Jackpot!`
        );
      } else {
        console.log(`ticket "${ticket}" - ${matchLength}${matchLeft[0][0]}`);
      }
    } else {
      console.log(`ticket "${ticket}" - no match`);
    }
  }
}
winningTicket("Cash$$$$$$Ca$$$$$$sh");
winningTicket("$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo@@@@@@ey");
winningTicket("validticketnomatch:(");

//Invalid ticket - "invalid ticket"
//No match - "ticket "{ticket}" - no match"
//Match with length 6 to 9 - "ticket "{ticket}" - {match length}{match symbol}"
//Match with length 10 - "ticket "{ticket}" - {match length}{match symbol} Jackpot!"
