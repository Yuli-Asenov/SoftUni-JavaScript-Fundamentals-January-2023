function matchPhoneNumber(input) {
  //let regex = /\+359(?<delimiter>[ -])2\k<delimiter>222\k<delimiter>2222\b/gm;
  //let regex = /\+359([ -])2\1(?:222)\1(?:2222)\b/gm
  let regex = /\+359([ -])2\1(?:\d{3})\1(?:\d{4})\b/gm;
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let text = input[i];
    let match = text.match(regex);
    result = result.concat(match);
  }
  console.log(result.join(", "));
}
matchPhoneNumber([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
