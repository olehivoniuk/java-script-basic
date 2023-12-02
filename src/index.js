import str from './test.js'; 
import _ from 'lodash';
import { getSum } from './math.js';
console.log(getSum(str)); 

// Using lodash functions
const result = _.map([1, 2, 3, 4, 6], (num) => num ** 2);
console.log(result); // Output: [2, 4, 6]

const pairs = _.chunk([1, 2, 3, 4, 6, 4],2);
console.log(pairs);

let falsy = _.compact([1, 2, 3, 4, false, 6, 4, null])
let start = _.head(falsy)
console.log(falsy , start);

