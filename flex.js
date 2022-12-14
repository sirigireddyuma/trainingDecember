//const array=["sam","sam2","sam3"];

//console.log(array[1]);

//const array=["sam","sam2","sam3"];

//console.log(array.toString());

//const array=["sam","sam2","sam3"];

//console.log(array.join("$"));

//const array=[];

//function addarray(){
 //    array.push("cnbv");
//     console.log(array);
//}

//addarray();

//other way

const array=[];

function addarray(values){
     array.push(values);
     console.log(array);
}

addarray("fggh1"); //arrays can hold any type of datatypes
addarray("fggh2");
addarray("shgf3");

array.unshift("csghhj4")
console.log(array);

array.pop();
console.log(array);

//array.shift();//if we want to display remaing items we should write this command
//console.log(array.shift());//removed 1st item

//what item was removed in array we want to display on screen write this command

let removeditem = array.shift();
console.log(removeditem);

 //let removeditem = array.shift(); if we want to display  remaing items on screen  we should write this command
//console.log(array)

array[1] = undefined;
console.log(array);

const array1 =["nnm","ghj"];
const array2 =array.concat(array2);
console.log(array2);