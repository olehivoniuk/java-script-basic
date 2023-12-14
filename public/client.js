function checkConsequence(arr) {

  for ( let i = 0; i < arr.length; i++){

    if ( arr[i] == arr[i + 1]){
     return (`Match has been found on ${i} and ${i+1} position`)
    }
  }

  return false; 
}

console.log(checkConsequence([1, 2, 3, 3, 4, 4, 5]));