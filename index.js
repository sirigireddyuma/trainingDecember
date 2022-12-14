//for loop

//for(let i=0; i < 10 ; i++){
   // console.log(i)
//}

//if we want even numbers we should write this command

//for(let i=0; i < 10 ; i++){
 //   if(i%2 == 0){
 //   console.log(i)
  //  }
//}

// function workonloops(num){

//     return ;

//     for(let i=0; i < num ; i++){
//            if(i%2 == 0){
//            console.log(i)
//           }
//           if(i == 9){//break statement has use in loops ,if condition met come outside of loop or function and go to next step ( we should use break )
//             break;
//           }

// }
// console.log("fjhj")
// }
// console.log("fjhjer");
// workonloops(56);

//return statemant  can be use inside of functions and remaing lines are not executed in fuctions all r skipped.return we can write any where in functions

// once condition is met  come out of the function((break) is come out of the loop).


//function workonloops(num){
   
    //for(let i=0; i < num ; i++){
         //  if(i%2 == 0){
          // console.log(i)
         // return ; //break ;
          // } 
          // console.log("sam");
          //if(i == 9){
           // console.log("sam2");
           // break;
          //}
       // }

         // if(5 < 7){
          //   console.log("right");
          //}


//console.log("sandhya");
//}
//console.log("hello");
//workonloops(56);

//in return statement we can write any datatype

//let x=10;
//x = "hi";// type casting is possible in js, in future the number is changing in string(js is dynamically changed)

// const string=[];

// function addarray(add){
//     addarray.push(add);
//     console.log(string);
    
// }

// console.log("today is friday")
// console.log("tomorrow is saturday")
// console.log("next week")

//  String.prototype.toUpperCase();
//   console.log(string);



// let x= "hello";

// console.log(x.toUpperCase())

//splice

 const arrays =[2,45,67,89]

// for(let i=0; i<arrays.length; i++){
//    console.log(arrays[i]);
// }

//for of loop & for in loop

//for (let i in arrays){
   //  console.log(arrays[i]);
 //}// it gives  the index of the array

  for (let i of arrays){
     console.log(i);
 }//it gives the value of the elememt

// seasons = ["fall","spring","summer","winter"]
// weather = ["rainy","sunny","coloudy","jhdkh"]


//  seasons.splice(3,4);
// console.log(seasons);
// weather.splice(3,4);
// console.log(weather);

//arr , ele i want to delete

// function deleteElements(arr1 , ele){

    
//    for(let i in arr1){
//        if(arr1[i] == ele){
//           arr1.splice(i, 1);
//        }
//     }
//     console.log(arr1);
//     //return arr1;

// }
// deleteElements(seasons,"summer");
// deleteElements(weather,"rainy");


// function deleteElements(arr1 , ele){

    
//    for(let i in arr1){
//        if(arr1[i] == ele){
//           arr1.splice(i, 1);
//        }
//     }
   
//     return arr1;//some ex: what display on screen( return, return "string")//console.log("jhscjhs")

//}
// const values = deleteElements(seasons,"summer");console.log(deleteElements(seasons,"summer"));
//  console.log(values);
// deleteElements(weather,"rainy");


//const str ="hello";

// for(let i of str){ //display h e l l o(row)
//    console.log(i)         
// }       
// for(let i in str){// 0 1 2 3 4 display in row
//    console.log(i)
// }

//string convert into array

// for(let i in str){

//    console.log(i);

// }
// console.log(str.split(''));
// const str ="hello rr th";
// for(let i in str){

//    console.log(i);

// }
// console.log(str.split(' '));

// const str ="hello rr th";


//    const newArr = str.split(" ");
//    console.log(newArr);

// newArr.pop();
// newArr.pop();
// newArr.push("sam");
// console.log(newArr);
//const rr=newArr.join(" ");console.log(rr);//insted of join we can use tostring it does display with comma(,),in join what we need taht add it
// ex:we want with -,%etc




