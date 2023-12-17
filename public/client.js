
function getDivisors(num){

  let arr = [];

  for ( let i = 0; i<= num; i++){
    if (  num % i == 0 ){
      arr.push(i)
    }
  }

 if ( arr.length == 3 ){
   return true
 } else{
   return false
 }
 
 
 }
 
 
  let res = getDivisors(4); 

  console.log(res);

