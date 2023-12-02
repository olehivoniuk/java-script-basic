

export function getSum(str){
   let sum =   str.split(',').reduce((sum, elem) => Number(sum) + Number(elem)); 

   return sum
   
        
}
export function square(num){
    return num **2
}
export function cube(num){
    return num **3
}

