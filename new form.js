 const names    =["sam","uma","yoshi","cherry"]
 const weather   =["summer","winter","rainy"]

function hi(names, ele){

    for( i in names){

        if(names[i] == ele || i == ele){
           
            let str=names[i].toUpperCase();
            names.splice(i,1,str);
            return names;
       
    }
}

}
console.log(hi(names,"yoshi"));
console.log(hi(weather,2));

