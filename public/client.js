let str = 'AbCdE';
 
let newStr = "";
for (let char of str) {
    let upper = char.toUpperCase();
 
    if (char === upper) {
        newStr += char.toLowerCase();
    } else {
        newStr += upper;
    }
}
// "hELLO, WORLD!"
console.log(newStr);
