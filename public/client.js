

function getRepeated(arr, num){

  let arr1 = []; 

  for (let i = 0; i < arr.length; i++){

    if ( num % arr[i] == 0){
      arr1.push(arr[i])
    }
   
  }

  console.log(arr1)
  

}
 

getRepeated(['2', '4', '5', '123'], 10)
