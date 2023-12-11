
function findSum(arr){

   let arr1 =  arr.splice(0, arr.length/2); 
   let arr2 = arr.splice(arr.length/2 - 1 )
   let sum1 = arr1.reduce ((sum,elem) => sum + elem, 0)
   let sum2 = arr2.reduce ((sum,elem) => sum + elem, 0)

   let res = sum1/sum2; 

   console.log(res);


   

}

findSum([1, 2, 3, 4, 5, 6])