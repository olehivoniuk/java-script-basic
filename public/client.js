function checkNumbers(str){

  let arr = str.split('')
  let res = arr.every(elem => /[0-9]/.test(elem))
  console.log(res);

}

 checkNumbers('2342352'); 

