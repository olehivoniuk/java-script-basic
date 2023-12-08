
function gerSum(arr){

    let sum = 0; 
    for ( let i = 0; i <= arr.length - 1; i++){
        if (arr[i]>0 && arr[i]< 10){
     
        sum += arr[i] ; 
        }
    }
    console.log(sum);

}

gerSum([2,4,5,6,-5,7,8])




