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

// setInterval(function(){
// 	const currentContent = fs.readFileSync('file1.txt','utf-8'); 
// 	const updatedContent = currentContent + "!"; 
// 	fs.writeFileSync('file1.txt', updatedContent)
// },1000)

// try {
// 	let text = fs.readFileSync('file.txt', 'utf8');
// 	console.log(text);
// } catch (err) {
// 	console.log('при чтении файла возникла ошибка', err);
// } 

// fs.readFile('file.txt', 'utf-8', function(err, data){

// 	if(!err){
// 		console.log(data**2)
// 	}else{
// 		console.log("File does not exist", err)
// 	}
// })

// console.log("Hello world")

// function createFiles() {
// 	let fileNames = [];
// 	for (let i = 0; i < 10; i++) {
// 	  fileNames.push('text' + i + '.txt');
// 	}
// 	return fileNames;
//   }
  
//   function getContent() {
// 	let fileContents = [];
// 	for (let i = 0; i < 10; i++) {
// 	  fileContents.push(i);
// 	}
// 	return fileContents.join('\n');
//   }
  
//   let fileNames = createFiles();
  
//   fileNames.forEach((fileName) => {
// 	fs.writeFile(fileName, getContent(), function (err) {
// 	  if (err) {
// 		console.log('Error creating file ' + fileName + ': ' + err.message);
// 	  } else {
// 		console.log('File ' + fileName + ' created successfully.');
// 	  }
// 	});
//   });

fs.readFile('file1.txt', 'utf8', function(err, data1) {
    if (!err) {
        fs.readFile('file2.txt', 'utf8', function(err, data2) {
            if (!err) {
                fs.readFile('file3.txt', 'utf8', function(err, data3) {
                    if (!err) {
                        fs.readFile('file4.txt', 'utf8', function(err, data4) {
                            if (!err) {
                                fs.readFile('file5.txt', 'utf8', function(err, data5) {
                                    if (!err) {
                                        console.log(data1 * data2 * data3 * data4 * data5);
                                    } else {
                                        console.log('ошибка чтения файла file5');
                                    }
                                });
                            } else {
                                console.log('ошибка чтения файла file4');
                            }
                        });
                    } else {
                        console.log('ошибка чтения файла file3');
                    }
                });
            } else {
                console.log('ошибка чтения файла file2');
            }
        });
    } else {
        console.log('ошибка чтения файла file1');
    }
});

