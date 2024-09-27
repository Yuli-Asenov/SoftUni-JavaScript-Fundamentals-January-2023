function matchDates(dates) {
  let regex =
    /(?<day>\d{2})(?<delimiter>[-/.])(?<month>[A-Z][a-z]{2})\k<delimiter>(?<year>\d{4})/gm;
  //let result = [];
  for (let i = 0; i < dates.length; i++) {
    let text = dates[i];
    let match = [...text.matchAll(regex)];
    for (let curMatch of match) {
      let res = `Day: ${curMatch.groups.day}, Month: ${curMatch.groups.month}, Year: ${curMatch.groups.year}`;
      console.log(res);
    }
  }
}
matchDates([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016",
]);
