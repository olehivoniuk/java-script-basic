

 
 
 function getUpdatedArray(arr){

   let arr1 = arr.toString().split(',')


   for ( let i = 0; i < arr1.length; i++){
    if (arr1[i].toString().length == 1 ){
        arr1[i] = `${arr1[i]}, ${arr1[i]}`
    }
   }

   return arr1


 }


  let res = getUpdatedArray([1,23,5,52,65,77])

  console.log(res)