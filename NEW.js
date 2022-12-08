//variables in js

//console.log("hello");

//alert("hello")
//var,let,const
var var1 = "This is name";//string
var num1 = 32;//number
var num2;//undefined
var isAgecorrect = true;//boolean
var num3 = null;// or ''//null
 //these are datatypes in JS
 //typeof operator
// what is type of variable we are useing 

//typeof

//console.log(typeof(var1));

//var arr1 = [1,2,3];
//array is the collection of similer items
//console.log(typeof(arr1));

var obj1 = {name1: "sandhya",name2: "gfjjkd" ,Age:23,isActive: false}

//key value pair and it can hold muitiple datatype it self

//console.log(typeof(obj1));

//mathematical operater in js

//let class1 = "hello1";
//const  class2 ="hello2";

//console.log("class1",class1);
//class1 = "hi";

//console.log("class1",class1);
//class2 = "hi1";

//console.log("class1",class2);

//var1 = "new string"
//console.log(var1);
//console.log(var1);
//console.log(let2);

//var var2;
//console.log(let2);
//let let2;

//var:we can assign the varible to var befor it does go to display
 // ex:
// console.log(var2);
 //var  var2; it does display undefined
 // insted of var we can use let it will show the error
   
// ==,===,<,>,<=,>=,|==,|=

//let weather = "rainy";
//if(weather == "rainy"){
 //   console.log("weather is rainy")
//}else{
//    console.log("weather is not rainy")
//}

//let weather = "65";
//if(weather === 65){ //if(weather == 65){ it will display weather is rainy
//    console.log("weather is rainy")
//}else{
//    console.log("weather is not rainy")
//}
//let weather = "65";
//if("rainy" == "rainy" ){
 //   console.log("weather is rainy")
//}else{
 //  console.log("weather is not rainy")
//}
//let weather = "65"; 
//if("rainy" == "rainy" && 4>=5 ){ //if("rainy" == "rainy" &&  true) || 4>=5 ){
 //  console.log("weather is rainy")
//}else{
 //  console.log("weather is not rainy")
//}


//< 18 - young
//18-35 -"adult"
//35-45 -"middle age"
// > 45 - "old"

//let age = 3;

//if (age > 35){
//    console.log("middle age")
//}else{
//    console.log("small")
//}

//let age =36;
//if (age >= 18 && age <=35){
 //   console.log("adult")

//} else if (age >= 35 && age <= 45){
  //     console.log("middle age")
   // }else if(age >= 45){
    //    console.log("old")
    //}else {
      //  console.log("young")
    //}

    // ardhamaticle operators in js +,-,*

    //let x = 14;
    //let y = 75;

    //console.log(x%y);

    //%,/(moduler operators) when we use this in js it does display remainders

    //for suppose  we can give number and string they both will concatinate

    //4688+'fjk'(+ is concatinate)
    //4688fjk
//for suppose  we can give number and string 

    //4688-'fjk'(- it does display NaN(not a number))
    //NaN

    //function print(){// SIMPLE SYNTAX IN JS

   // }
   //print();// invoking  function

//We can wnnt to execute multiple  lines  of code that time we can use functions.this  functions would help to reuse the code

//function print(){
  //  console.log("sam")
//}

//print();

//function print(fgh , hjk){
 //    console.log( "my name is   " +fgh , hjk)//insted of + we can use , also
//}
//print("sam"," ,  sand")//we r adding arguments to the functions

function print(name){
    console.log("hi" , name)
    console.log("how r u")
}
print("sam");

print("sam1");

print("sam2");