
function getArr(arr){

//   let arr1 = []

//     for ( let i = 0; i < arr.length - 1; i++ ){
//         arr1.push(arr[i] + arr[i]*0.1)
//     }

//     console.log(arr1);
    
    
     let res = arr.map(elem =>  elem + elem * 0.1 )
     console.log(res);


   
}

getArr([2,4,5,6])




