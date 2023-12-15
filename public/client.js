function delete3LettersWords(arr){

  let arr1 = []; 

     arr.forEach(elem => (elem.split('').length <3)? arr1.push(elem): null   )

  
     return arr1;
 }

  let res = delete3LettersWords(['ggg', 'j', 'ghghghg', 'k', 'dhdd', 'ggg'])

 console.log(res)



