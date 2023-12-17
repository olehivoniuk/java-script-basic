

 
function getLastLetterCapitalized(str){

  let arr = str.split(' '); 

  for ( let i = 0; i < arr.length; i++ ){
    arr[i] = arr[i].slice(0, arr[i].length - 1 )
     + arr[i].split('')[arr[i].length - 1].toUpperCase()
  }

  return arr.join(' ')

}


 let res = getLastLetterCapitalized("hello world nice to see you again here")
 console.log(res)