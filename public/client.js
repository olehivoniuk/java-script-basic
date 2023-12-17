

function getRepeated(arr){

  for (let i = 0; i < arr.length; i++){
    arr[i] = `${arr[i]},${arr[i]}`
  }
  console.log(arr);

}
 

getRepeated(['2', '4', '5'])
