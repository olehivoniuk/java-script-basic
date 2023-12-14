function replaceFirstCharacter(str) {
  let words = str.split(' ');

  // Replace the first character of each word with '!'
  let modifiedWords = words.map(word => {
    if (word.length > 0) {
      return '!' + word.slice(1);
    } else {
      return word;
    }
  });

  // Join the modified words back into a string
  let result = modifiedWords.join(' ');

  console.log(result);
}

replaceFirstCharacter('abcde abcde abcde');