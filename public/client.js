function findTotal(arr){

  let sum = 0;

  for ( let i = 0; i< arr.length; i++){

      let sums = arr[i].reduce((sum, elem) => sum + elem,0)
      sum += sums

    
  }

  return sum

  
 }

 let res = findTotal([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
])

console.log(res);


