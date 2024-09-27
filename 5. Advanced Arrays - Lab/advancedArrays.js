//pop
//let arr = [1,2,3];
//arr.push(4,5);
//console.log(arr);
//let removedElement = arr.pop();
//let secondRemovedElement = arr.pop();
//console.log(removedElement);
//console.log(secondRemovedElement);
//console.log(arr);

//unshift
//let arr1 = [1,2,3];
//arr1.unshift(4,5);
//console.log(arr1);
//let removedUnshiftElement = arr1.shift();
//console.log(arr1);
//console.log(removedUnshiftElement);

//includes
//let arr = [1,2,5,3,5];
//let has5 = arr.includes(5);
//console.log(has5);

//indexOf
//let firstIndexOf5 = arr.indexOf(5);
//console.log(firstIndexOf5);
//vrushta purvata poziciq na koqto se namira turseniqt element - v sluchaq 5

//slice()
// - pravi kopie na elementite koito e selektnal
//let arr1 = [1,2,3];
//let arrCopy = arr1.slice();
//arr1[0] = 20;
//console.log(arrCopy);
//ako ne izberem indeksaciq v slice() - kopira celiq masiv
//ako napishem -1 - programata shte vzeme posledniq element ot masiva - vse edno kazvame arr.length - 1

//splice() - mutira masiva - operira po istinskiq masiv
//let arr = [1,2,3];
//let removedElement = arr.splice(1, 1, 4); // - pochni ot index edno i vzemi edin element
// - v sluchaq 2 shtoto e na index 1
// - i sled tova sloji chisloto 4 na index 1
//console.log(removedElement); //- mahnatoto i prisvoeno chislo na index 1
//console.log(arr); //- mutiraliq masiv s dobaveno novi chislo (4) - na index 1


//chisla ot malko kum golqmo
//sort(); - ako ne podaden nishto gi sortira kato string
//let arr = [2,10,1];
//arr.sort((a,b) => a - b); - ako oburnem b - a sortiraneto shte e na obratno
//vmesto uvelichavashto shte poluchim namalqvashto sortirane s b - a;


//vrushta bukvite po posledovatelnost
//let arr = ['a','b','aa'];
//arr.sort((a,b) => a.localeCompare(b));
//console.log(arr);


//stringove ot dva simvola
//let arr = ['a','b','aa'];
//arr.sort((a,b) => {
    //let result = a.length - b.length || a.localCompare(b);
    //ili
    //if(result === 0){
        //result = a.localeCompare(b);
    //}
    //return result;
//});
//console.log(arr);
//shortcircuit - warlokock name D:D:D


//reduce function;
let arr = [1,3,5];
let sum = arr.reduce((accumulator,currentElement) => accumulator += currentElement, 0);
console.log(sum);