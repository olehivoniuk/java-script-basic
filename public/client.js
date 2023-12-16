let arr = [134534, 2345, 34, 4, 545, 645, 7356, 85, 9]

function getNewArray(arr){


  let arr1 = []; 

  for ( let i = 0; i < arr.length; i++){
  if (arr[i].toString().split('').length < 3){
       arr1.push(arr[i]) ;
  }
  }
  return arr1

}

 let res = getNewArray(arr)

 console.log(res)