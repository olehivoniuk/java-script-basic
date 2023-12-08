
function gerSum(num){

      
     let arr = num.toString().split(''); 
     let sum = arr.reduce((sum, elem )=> sum + Number(elem),0)
     console.log(sum);

}

gerSum(12345)




