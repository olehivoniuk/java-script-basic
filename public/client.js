arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

function getConcatenated(arr){

  let arr1 = []
  

  for ( let i = 0; i < arr.length; i++){
    let str =  arr[i].join('')

    arr1.push(str)
  }
  return arr1.join('').split('')

}

 let res = getConcatenated(arr)

  console.log(res)
