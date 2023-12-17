function checkIfContains3(arr){

  for ( let ch of arr){
    console.log(ch.toString().includes('3')); 
  }

}

checkIfContains3([453, 345, 423, 321])