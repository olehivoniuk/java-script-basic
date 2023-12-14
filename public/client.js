function capitalizeEverySecondWord(str) {
  let words = str.split(' ');

  for (let i = 1; i < words.length; i += 2) {
      if (words[i].length > 0) {
          words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      }
  }

  return words.join(' ');
}

console.log(capitalizeEverySecondWord('aaa bbb ccc eee fff'));