function checkTheNumberOfNumbers(str) {
  let arr = str.split(' ');

  let arr1 = [];


  for ( let i = 0; i< arr.length; i++){
    
     if (arr[i].split('').length <= 3  ){
       arr1.push(arr[i])
     }
    
  }
  return arr1.join(' ')
 


}

console.log(checkTheNumberOfNumbers('1 22 333 4444 22 5555 1'))
