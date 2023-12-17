

function getRepeated(num1, num2){

  let arr1 = num1.toString().split('')
  let arr2 = num2.toString().split('')
   let arr3 = arr1.concat(arr2); 
     arr3.sort()
   let arr4 = []

   for ( let i = 0; i < arr3.length; i++){
    if ( arr3[i] == arr3[i + 1 ]){
      arr4.push(arr3[i])
    }
   }

   return arr4

}
 

let res = getRepeated(4568, 259634); 
console.log(res)
