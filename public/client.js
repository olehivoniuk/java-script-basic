
function getDifference(arr) {

    let sum1 = 0

    for ( let i = 0; i <= arr.length - 1; i+=2){
            sum1 += arr[i]
        
    }

    let sum2 = 0
    for ( let i = 1; i <= arr.length - 1; i+=2){
       
        sum2 += arr[i]
    
}
console.log(sum1/sum2)
    
}

getDifference([1, 2, 3, 4, 5, 6]);


