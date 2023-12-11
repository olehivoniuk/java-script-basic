
function findMatch(str){

    let arr = str.split(''); 

    let count = 0; 
    
    for ( let i = 0; i < arr.length; i++){
        if ( arr[i] == 'e' ){
            count++;
            if (count == 3){
                console.log(i)
            }
        }
    }
}

findMatch('hello oscareeee')