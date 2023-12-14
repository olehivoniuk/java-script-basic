function moveToUpperCase(str) {
  let words = str.split(' ');
  

  for (let i = 0; i < words.length; i += 1) {
      if (words[i].length <= 3) {
          words[i] = words[i].toUpperCase()
      }
  }

    console.log (words.join(' '))
}

moveToUpperCase('a bc def ghij');