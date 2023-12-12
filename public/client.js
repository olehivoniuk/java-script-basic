
function getCount(num) {


    let arr = num.toString().split('')
    console.log(arr);

    let count = 0; 
    for ( let i = 0; i < arr.length; i++){

        if ( arr[i] % 2 == 0){
        count ++
        }

    }
    console.log(count)


}

getCount(12132224682)


