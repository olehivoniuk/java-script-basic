function deleteEachFithElem(arr){

  // let res = arr.filter((elem, index) => (index == index + 5)? elem: null)

  // return res

  for(let i = 4; i < arr.length; i += 5){
    arr.splice(i, 1);
 }

 return arr
  
 }

 console.log(deleteEachFithElem([1,4,5,6,5,7,8,8,9,5,0,0,0,4,5,4]))


