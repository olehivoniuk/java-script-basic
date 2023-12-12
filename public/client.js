
function separateGroups(str) {
    let reversed = str.split('').reverse().join('');
    let result = reversed.replace(/(\d{3})(?=\d)/g, '$1 ');
    return result.split('').reverse().join('');
}

let separatedNumber = separateGroups('1234567');
console.log(separatedNumber);


