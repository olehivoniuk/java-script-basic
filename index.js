import fs from 'fs';

async function func() {
    try {
        let names = ['Hello1.txt', 'Hello2.txt','Hello3.txt','Hello4.txt', ];
       names.forEach((name)=>{
		   let rand = Math.floor(Math.random()* names.length); 
		    fs.promises.writeFile(name, rand.toString())
	   })
	   let data  = [];
			for ( let name of names){
               data.push(await fs.promises.readFile(name, "utf-8"))
			}
			let updatedData = data.map(Number); 
			let total = updatedData.reduce((sum, elem) => elem + sum, 0); 
			console.log(total);

			

			await fs.promises.writeFile('result.txt', total.toString())
			
    } catch (err) {
        console.log('что-то пошло не так');
    }
}

func();
