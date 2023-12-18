

function getArray(arr){

  let arr1 = arr.toString().split(',')

  let arr2 = [];
  let arrs2;


  for ( let i = 0; i< arr1.length; i++){
    arrs2 = arr1[i].split('').sort(); 
   let arr3 = []
   for ( let j = 0; j < arrs2.length;  j++){

    if (arrs2[j] !=  arrs2[j + 1]){
     arr3.push(arrs2[j]) 
    }
   }
   arr2.push(arr3.join(''))
  }

  return arr2
 
}
 
  let res = getArray([234235,234,454,6767,345,12345,5656]); 
  console.log(res)


  
