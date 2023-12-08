
function getLastLetter(str){

   let lastLetter =  str[str.length -1 ]
   
   
   if (lastLetter != 'p' ){
       console.log('the words ends with all letters but p')
   }else{
       console.log( str[str.length - 2])
   }
}

getLastLetter('Hello Horlp')




