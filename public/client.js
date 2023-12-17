
function getDivisors(num){

  let arr = [];

  for ( let i = 0; i<= num; i++){
    if ( num % i == 0){
      arr.push(i)
    }
  }

  return arr;
 
 
 }
 
 
  let res = getDivisors(15); 

  console.log(res);

