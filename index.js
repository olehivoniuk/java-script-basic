import fs from 'fs';
// import { square, cube } from './math.js';

// let res  = square(2) + cube(3);
// console.log(res);

// let text1 = fs.readFileSync('file1.txt','utf8'); 
// let text2 = fs.readFileSync('file2.txt','utf8'); 

// console.log(+text1 + +text2)

// let obj = {
// 	'file1.txt': 'text1',
// 	'file2.txt': 'text2',
// 	'file3.txt': 'text3',
// }

// for ( let [key, value] of Object.entries(obj)){
// 	fs.writeFileSync(key,value)
// }

setInterval(function(){
	const currentContent = fs.readFileSync('file1.txt','utf-8'); 
	const updatedContent = currentContent + "!"; 
	fs.writeFileSync('file1.txt', updatedContent)
},1000)