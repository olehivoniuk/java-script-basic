
function getArr(arr){

    let arr1 = []

    for(let i = 0; i <= arr.length - 1; i++ ){
      arr1.push( arr[i].toFixed(1));
    }
    console.log(arr1)

}

getArr([1.456, 2.125, 3.32, 4.1, 5.34])




