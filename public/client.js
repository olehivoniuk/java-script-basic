
function getFirstDigit(num){

   let firstDigit =  num.toString().split('').slice(0,1); 
   let lastDigit =  num.toString().split('').slice(-1); 
   let sum = Number(firstDigit) + Number(lastDigit)

   console.log(sum)
   

}

getFirstDigit(443)




