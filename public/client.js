
function getFirstDigit(num){

   let firstDigit =  num.toString().split('').slice(-1)

   console.log(Number(firstDigit))
   

}

getFirstDigit(443)




