

function filterArray(arr){

   let res  = arr.some(elem =>  (elem.toString().includes('3'))? true : false)

   console.log(res);
  
}

filterArray([1,5,25,20,50,41,40,5])