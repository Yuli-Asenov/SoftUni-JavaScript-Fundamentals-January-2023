function muOnline(arr) {
  //1 split rooms from input
  let rooms = arr.split("|");
  let hp = 100;
  let bitcoins = 0;
  //1.5 iterate rooms
  for (let i = 0; i < arr.length; i++) {
    //2 split input for each room
    let room = rooms[i];
    let tokens = room.split(" ");
    let command = tokens[0];
    let value = Number(tokens[1]);
    //3 execute room logic
    if (command === "potion") {
      let missingHp = 100 - hp;
      let restoredHp = Math.min(missingHp, value);
      hp += restoredHp;
      console.log(`You healed for ${restoredHp} hp.`);
      console.log(`Current health: ${hp} hp.`);
    } else if (command === "chest") {
      bitcoins += value;
      console.log(`You found ${value} bitcoins.`);
    } else {
      hp -= value;
      if (hp <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      }
      console.log(`You slayed ${command}.`);
    }
  }
  console.log(`"You've made it!`);
  console.log(`"Bitcoins: ${bitcoins}`);
  console.log(`"Health: ${hp}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
