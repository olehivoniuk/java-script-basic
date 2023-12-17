

function getArray(num1){

  let arr1 = num1.toString().split('')
  console.log(arr1);
  let arr = []; 

  for ( let i = 0; i< arr1.length; i++){
    if ( arr1[i] == 3 ){
      arr.push(i)
    }
  }

  arr.splice(0,1); 
  arr.splice(arr.length - 1); 
  return arr;
  

}
 
  let res =  getArray(2312352923224232); 
  console.log(res)
