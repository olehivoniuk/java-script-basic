
function findMatch(str){

   let arr = str.split(' '); 
   let arr1 = arr[0].split('')
   let arr2 = arr[1].split('')

   if (arr1[arr1.length - 1] == arr2[0]){
       console.log("Math has been found")
   } else{
       console.log('no match has been found ')
   }
   


   

}

findMatch('hello oscar')