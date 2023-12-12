function mergePairs(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 2) {
        let pair = arr.slice(i, i + 2);
        result.push(parseInt(pair.join('')));
    }

    return result;
}

let inputArray = [1, 2, 3, 4, 5, 6];
let mergedPairs = mergePairs(inputArray);
console.log(mergedPairs);
