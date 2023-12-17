

 
 function removeVowels ( doc ) {
  
  let result = ''; 

  for ( const ch of doc ){
    if(!'aeiouyAEIOUY'.includes(ch))
    result += ch; 
  }

  return result;

}

 let res = removeVowels("hello world")

console.log(res);