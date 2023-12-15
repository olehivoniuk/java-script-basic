function checkOddNumbers(num){

  let arr1 = num.toString().split(''); 

    let condition = arr1.every(elem => (elem % 2 != 0)? true : false)

  console.log(condition)

     
 }

  checkOddNumbers(1357)





