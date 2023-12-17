function deleteElements(num){

  let arr = num.toString().split(',')

 
  
  for ( let i = 0; i< arr.length; i++){
     let arr1 = arr[i].split(''); 
     if ( !arr[i].includes('00')){
       console.log(arr1)
     }
   
  }

  
}


deleteElements([32, 24000, 420, 410000]); 
 
