
function convertToUpperCase(str) {

    let result = str.split('')
    let arr1 = []
    for ( let i = 0; i< result.length; i++){
        if ( result[i] == 0){
            arr1.push(i)
        }
    }
    console.log(arr1)

}

convertToUpperCase('023m0df0dfg0')


