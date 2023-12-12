
function convertToUpperCase(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}

let originalString = 'abcde';
let modifiedString = convertToUpperCase(originalString);

console.log(modifiedString);


