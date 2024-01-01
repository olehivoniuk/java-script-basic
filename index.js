import fs from 'fs/promises';
import { access, constants } from 'fs';

// async function func() {
//     try {
//         let names = ['Hello1.txt', 'Hello2.txt','Hello3.txt','Hello4.txt', ];
//        names.forEach((name)=>{
// 		   let rand = Math.floor(Math.random()* names.length); 
// 		    fs.promises.writeFile(name, rand.toString())
// 	   })
// 	   let data  = [];
// 			for ( let name of names){
//                data.push(await fs.promises.readFile(name, "utf-8"))
// 			}
// 			let updatedData = data.map(Number); 
// 			let total = updatedData.reduce((sum, elem) => elem + sum, 0); 
// 			console.log(total);

// 			await fs.promises.writeFile('result.txt', total.toString())
			
//     } catch (err) {
//         console.log('что-то пошло не так');
//     }
// }

// func();

// console.log(__dirname);



 async function  checkExistence() {
    // fs.access('result.txt', constants.F_OK)
    //     .then(() => {
    //         return fs.readFile('result.txt', 'utf-8');
    //     })
    //     .then((data) => {
    //         console.log('File exists. Content:', data);
    //     })
    //     .catch(() => {
    //         console.log('File does not exist');
    //     });
	try{
		await fs.access("result.txt", constants.F_OK)
        console.log("file exists")
		let data = await fs.readFile ( "result.txt", 'utf-8')
		console.log(data)
	} catch(error){
		console.log("the file does not exist", error)
	}
}

checkExistence();

