function sortInnerArrays(arr){

  let arr1 = []

   for ( let i = 0 ; i< arr.length; i++){
         let part = arr[i].sort();
         arr1.push(part)
   }

   return arr1;
   

   
}

  let res = sortInnerArrays([
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
]); 

console.log(res);
