//global scope,local scope

//we can declared outside of functions ,if condition that type of variables are global scope variables
//we can declared inside of  functions,if condition  that type of variables are local scope variables
//globle variables are displayed in lacal or globle(in functions ,conditions)

// var example1 = "true";//global scope

// let  example2 = "uma";
// let y=10;

// if(true){

// var x = 1;//local scope
// let y = 2;//let keyword is a block scoped(with in braces we use console.log(y); out side it does not work)
// //let y(we are not declared sam name it will complain to us.we can't declared same variable name)//console.log(y);
// //it does display only global variable(y value 10)
// console.log(example1);
// //we can redeclar var x it does't give any complain to us
// //ex:var x =2; (console.log(x) it does display 2 why means it takes second time what we declared.this is the disadvantage of using var keyword)
// }

// console.log(x);
// console.log(y);

//var is a function scope variable //let is a block scope variable
// var is a hosting keyword it does do it takes top of the global scope (we declare any line in global)
// var is a hosting keyword it does do it takes top of the local scope (we declare any line in local)
//when we r using the var in global or local the variable is declaring on top of that but if we r  assign any value to that after
 // consol.log it does't take any value to it(it does take only variable x,y etc).
 //assign any value before consol.log it does take value to it.
 //if suppose we use let keyword it gives syntax error(let is not hosting )
var example1 = "true";

let  example2 = "uma";
let y;//if suppose let y;

if(true){
    let y=5;
    console.log(y);//it is showing error on screen until  we fix this error(it does not execute remaing code) 
}
console.log(y)
function hello(){
      //console.log(xx or yy or x or zz or hh) var variables displayed its undefined .let  variables displayed syntax error
let xx = 10;
var yy = 10;
if(5>2){
    let zz = "hello";
    var hh = "hjklk";
    console.log(zz);//display value 
}
if(true){

    console.log(xx);//10
    console.log(yy);//10
    y = 69;
}

//console.log(zz);//undefined because of let
//console.log(hh);//hjklk
}
hello();
    
    
     console.log(y);//it will be print 69

     //sum 

     const sum1 = [2,4,7,8]
      ////let sum = 0;
      function hi(){
        let m;
         let sum =0 ;

         for(let i of sum1){
            sum = sum + i;
            m =7;
         }
         if(true){
            console.log(m);
         }
          return sum;
      }
      hi();
      console.log(hi());
        ////console.log(sum);
