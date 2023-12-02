

export function getSum(str){
   let sum =   str.split(',').reduce((sum, elem) => Number(sum) + Number(elem)); 

   return sum
   
        
}


