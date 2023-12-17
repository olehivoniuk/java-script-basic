function checkNumbers(str){

  let arr = str.split('')
  let res = arr.every(elem => elem %2 ==  0)
  console.log(res);

}

 checkNumbers('2422'); 

