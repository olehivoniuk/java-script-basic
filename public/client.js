function findNumbers(num){



  for ( let i = 0; i <= num; i++){
      let arr = i.toString().split(''); 
      let sums = arr.reduce((sum,elem) => sum + Number(elem),0)
      if (sums == 13){
        console.log(i);
      }
     
  }

 
  
  
  
}


findNumbers(1000); 
 
