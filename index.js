import fs from 'fs';

async function func() {
    try {
        let names = ['1.txt', '2.txt'];
        let data = [];

        for (let name of names) {
            data.push(await fs.promises.readFile(name, 'utf8'));
        }
        console.log(data);

        // Convert each element to a number and then sum
        let sum = data.map(Number).reduce((acc, num) => acc + num, 0);

        // Write the sum to 'res.txt'
        await fs.promises.writeFile('res.txt', sum.toString());
    } catch (err) {
        console.log('что-то пошло не так');
    }
}

func();
