function checkProgression(num){

   let arr = num.toString().split('')

   for ( let i = 0; i< arr.length; i++){
     if ( arr[i] > arr [i + 1]){
       return false
     } else{
       return true
     }
   }
}

let res = checkProgression(1123451); 
console.log(res)