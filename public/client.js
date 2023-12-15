function makeZeros(num){

  let arr = []

   for ( let i = 0; i <= num - 1; i++){
   
     arr.push(i)
     arr[i] = '0'
   }

   return arr.join('')

 
 }

console.log(makeZeros(9))


