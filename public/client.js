
function getFirstDigit(num1, num2){

   let firstDigit =  num1.toString().split('').slice(0,1); 
   let secondDigit =  num2.toString().split('').slice(0,1)
   console.log(firstDigit)
   if (Number(firstDigit) === Number(secondDigit)){
       console.log("the first digits are the same");
   } else{
       console.log('the first digits are different ')
   }

  

 
}

getFirstDigit(52, 53)




