

function filterArray(arr){

   let res  = arr.filter(elem =>  (elem.toString().includes('0'))? elem : null)

   console.log(res);
  
}

filterArray([1,5,25,20,50,41,40,35])