// function partyTime(input) {
//   let data = input.splice(0, input.indexOf("PARTY"));
//   input.splice(0, 1);
//   let VIP = [];
//   let regular = [];
//   for (let guest of data) {
//     if (guest[0] >= "0" && guest[0] <= "9") {
//       VIP.push(guest);
//     } else {
//       regular.push(guest);
//     }
//   }
//   for (let guest of input) {
//     if (VIP.includes(guest)) {
//       VIP.splice(VIP.indexOf(guest), 1);
//     }
//     if (regular.includes(guest)) {
//       regular.splice(regular.indexOf(guest), 1);
//     }
//   }
//   console.log(VIP.length + regular.length);
//   VIP.forEach((x) => console.log(x));
//   regular.forEach((x) => console.log(x));
// }
// partyTime([
//   "7IK9Yo0h",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
//   "tSzE5t0p",
//   "PARTY",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
// ]);

function partyTime(input) {
  // create two collections
  let vipInvites = new Set();
  let regularInvites = new Set();
  //for every line of input,until party
  while (input[0] !== "PARTY") {
    let guest = input.shift();
    if (Number.isNaN(Number(guest[0]))) {
      // if invitation is regular - add to regular list
      regularInvites.add(guest);
    } else {
      // else add to vip list
      vipInvites.add(guest);
    }
  }

  // for every remaining line
  for (let guest of input) {
    // remove guest from their respective list
    vipInvites.delete(guest);
    regularInvites.delete(guest);
  }
  // print sum of unused invites from both collections
  console.log(vipInvites.size + regularInvites.size);
  //print unused vip invites
  for (let guest of vipInvites) {
    console.log(guest);
  }
  for (let guest of regularInvites) {
    console.log(guest);
  }
  //print unused regular invites
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
