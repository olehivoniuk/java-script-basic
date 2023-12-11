function getSum(num){

    for ( let i = 1; i <= num; i++){

        let firstDigit = i.toString().slice(0,1)
        let secondDigit = i.toString().slice(1,2); 

        let sum = Number(firstDigit) + Number(secondDigit); 

        if ( sum ==  5){
            console.log(i);  
        }  
    }
   
 
}
getSum(1000)



