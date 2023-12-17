function changeString(str){

 let cutStr = str.slice(7); 
 let upperCase = str.slice(6,7).toUpperCase()

 let res = `camel${upperCase}${cutStr}`

 console.log(res);



 
}

changeString('kebab-case')