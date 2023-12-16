let num = 12345;

function checkDigits(num){

  let arr = num.toString().split(''); 

   let res = arr.every(elem => (+elem > 0)? true : false)

  console.log(res);



}

 checkDigits(num)

