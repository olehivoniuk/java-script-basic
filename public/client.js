function getTotalOfPairs(str) {

  let regex = /[a-zA-z]/g
  
    let res =  str.match(regex );

     if (res.length >3){
       console.log("String has more than 3 letters ")
     } else{
       console.log(
         'string has less than 3 letters'
       )
     }
 
}

getTotalOfPairs('ld12')
