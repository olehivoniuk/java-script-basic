function deleteEachSecondWord(str){

  let arr = str.split(' '); 

   for ( let i = 1; i < arr.length; i+=1){
     arr.splice(i, 1)

   }

   return arr
 }

console.log(deleteEachSecondWord('aaa bbb ccc eee fff ddd jjj'))


