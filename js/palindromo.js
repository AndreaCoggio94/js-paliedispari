const userWord = prompt("Inserisci una parola");
const lowerCaseUserWord = userWord.toLowerCase();
palindroma(lowerCaseUserWord, userWord.length);

function palindroma(word, length) {
  let lastLetter = length - 1;

  let reverseWord = [];
  for (let i = 0; i < length; i++) {
    let checkFront = word[i];

    let checkBack = word[lastLetter];
    lastLetter = lastLetter - 1;
    if (checkFront == checkBack) {
      reverseWord.push(checkBack);
    }
  }

  console.log(reverseWord);
  if (reverseWord.length == length) {
    alert(userWord + " è una parola palindroma");
  } else {
    alert(userWord + " non è una parola palindroma");
  }
}
