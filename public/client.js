function deleteOddNumbers(num) {

  let arr = num.toString().split(''); 

  let arr1 = [];

  for ( let i = 0; i<= arr.length - 1; i++){

    if (arr[i] % 2 == 0  ){
      arr1.push(arr[i])
    } 

  }
  return arr1.join('')


 
  
}

console.log(deleteOddNumbers('123789'));