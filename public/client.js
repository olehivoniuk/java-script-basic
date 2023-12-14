function checkTheNumberOfCapitalLetters(str) {
  let arr = str.split('');
  let countCapitalLetters = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase() && arr[i] !== ' ') {
      countCapitalLetters++;
    }
  }

  if (countCapitalLetters >= 2) {
    console.log("There are more than 2 capital letters.");
  } else {
    console.log('The number of capital letters is less than 2.');
  }
}

checkTheNumberOfCapitalLetters('Helloorld');
