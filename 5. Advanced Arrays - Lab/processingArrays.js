//map() - creates a new array by applying function to every element
let arr = [1,2,3];
let multipyBy2 = (a) => a * 2;
//function (element) return element * 2; - edno i sushto kato arrow functiona;
let newArr = arr.map(multipyBy2); // - map shte priloji umnojenieto po vseki element na originalniq masiv
// i shte gi zapazi rezultata v novo copie
console.log(arr);

let result = customMap(multipyBy2,arr);
console.log(result);

console.log(newArr);
// - map kato funkciq - versiq na lektora
function customMap(multipyBy2,arr){
    let newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
       let modifiedElement = multipyBy2(arr[i]);
        newArr2.push(modifiedElement);
    }
    return newArr2;
}
//filter - i map i filter rabotqt po kopie na masiv - ne mutirat masiva
// refference vs value types
let otherFunc = multipyBy2;

//map
let arr1 = ['1','2','3'];
let newArr1 = arr1.map(x => Number * 2);
//map

//filter
let arr2 = [1,2,3,4];
let newArr2 = arr2.filter(x => x % 2 === 0);
console.log(newArr2);