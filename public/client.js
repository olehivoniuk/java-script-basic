
function getFirstDigit(num){

   let firstDigit =  num.toString().split('').slice(0,1)

   console.log(Number(firstDigit))
   
   
   if (firstDigit != 'p' ){
       console.log('the words ends with all letters but p')
   }else{
       console.log( str[str.length - 2])
   }
}

getFirstDigit(444)




