function changeString(str){

 let cutStr = str.slice(5); 
 

 let res = `snake_${cutStr.toLowerCase()}`

 console.log(res);



 
}

changeString('camelCase')