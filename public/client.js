

function changeArraysOrder(arr){

 let arr1 = []; 

  for ( let i = 0 ; i < arr.length; i+=2){
      arr1.push( arr.slice(i, i+2).reverse());
  }

   console.log (arr1.join(',').split(','))
 
  return arr1
  

  
}

 changeArraysOrder([1, 2, 3, 4, 5, 6])
 
