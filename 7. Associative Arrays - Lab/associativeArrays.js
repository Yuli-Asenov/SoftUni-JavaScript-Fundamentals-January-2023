// //klucha vinage e string = key
// let employeeObj = {
//     age: 20,
//     height: 173,
//     eyeColor: "blue",
//     job: "Dev"
// };
// // key v obekt e kato i v masiv
// //obj[key]
// //arr[i]
// //obj.entries - obj.value - priemat stoinostite ot obekt i pravqt kopie na tqh pod formata na masiv
// let entries = Object.entries[key];
// for(const innerArr of entries){

// }

// let dict = {
//   "pesho": 1,
//   "gosho": 2,
//   "ivan": 3,
//   "0": 4,
//   //ako slojim 0 na vsi4ki - dolo if-a nqm da vleza v nego
//   //shtoto 0 e false po default
// };

// Object.entries(dict).sort((a,b) => a[0].localeCompare(b[0]));
// let key = "ivan"
// //.localeCompare - sruvnqva dumi - string
// //ako imame chisla moje s minus - ne stava s localeCompare
// delete dict["pesho"];
// console.log(dict);

// for (const key in dict) {
//     dict[key] += 1;
//   if (dict[key]) {
//     console.log(dict[key]);
//   }
// }

////destructorirane
// let arr = [1,2,3];
// let [a,b,c] = arr;
// console.log(arr);

// let obj = {a:1,b:2,c:3};
// let {a:d,c:e} = obj;
// console.log(d);
// console.log(e);

// let dict = {
// "pesho": 1,
// "gosho":2,
// "ivan":3,
// };
// dict["angel"] = 4;
// console.log(dict);
// let arr = [1,2];
// let [a,b] = arr;
// //let entries = Object.entries(dict).sort(([aKey]),([bKey]) => aKey.localeCompare(bKey));
// //console.log(entries);


//map
// let map = new Map();
// map.set("pesho",1);
// map.set("5",2);
// map.set(0,3);
// console.log(map);// s map.set() se zapazva podredbata koqto sum mu dal

// let b = map.get(0);
// console.log(b);

// let c = map.has(0);
// console.log(c);

// let a = {};
// a["pesho"] = 1;
// a["5"] = 2;
// console.log(a);

//set - kolekciqta ot kluchove v edin map - vsi4ki trqbva da sa unikalni
//overwritva ako ima povtarqshti se

// let set = new Set();
// set.add("pesho");
// set.add("pesho");
// set.add("gosho");
// console.log(set);

//Tosho

//(dict[each[i]] == (dict[each[i]]) || 0 + 1) - //store provisions primer
//let bResult = true;
//return bResult && 5+1