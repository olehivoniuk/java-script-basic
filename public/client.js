
function deleteSymbol(str) {
    let arr = str.split('');

    arr = arr.filter((elem, index) => index !== arr.length - 2);

    let result = arr.join('');

    console.log(result);
}

deleteSymbol("HelLo");