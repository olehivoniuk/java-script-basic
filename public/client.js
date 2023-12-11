function getSumOfTheHalf(arr){

    let half = arr.slice(0, arr.length / 2) 

   let res = half.reduce((sum, elem) => sum + elem, 0) 
    
    console.log(res);

}
getSumOfTheHalf([1, 2, 3, 4, 5, 6])



