
function checFirstLetter(str){

   let arr =  str.split(' ');
   
   if (arr[0].slice(0,1) == arr[1].slice(0,1)){
       console.log('the words starts with the same letters')
   }else(
       console.log('the words starts with differet letters')
   )
}

checFirstLetter('Hello Horld')




