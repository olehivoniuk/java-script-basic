import fs, { fdatasync } from 'fs';

fs.promises.readFile('file1.txt', 'utf8')
  .then(data => {
    let res = data.trim().split(',').map(Number); // Convert each character to a number
    console.log(res);

    function createFiles() {
      let fileNames = [];
      for (let i = 0; i < res.length; i++) {
        fileNames.push(`text${i}.txt`);
      }
      return fileNames;
    }

    let fileNames = createFiles();

    function getContent(index) {
      return res[index].toString(); // Convert the number to a string
    }

    return Promise.all(fileNames.map((fileName, index) => {
      return fs.promises.writeFile(fileName, getContent(index));
    }));
  })
  .then(() => {
    console.log('Files created successfully.');
  })
  .catch(err => {
    console.error('Error:', err);
  });
