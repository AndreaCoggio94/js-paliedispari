// # palindromo

// request word to user

const userWord = prompt("Inserisci una parola");

const lowerCaseUserWord = userWord.toLowerCase();

// check if userWord is a number
// evoking function

if (isNaN(userWord)) {
  palindroma(lowerCaseUserWord, userWord.length);
} else {
  alert("inserisci una parola non un numero");
}

// function to check words for "palindrome"

function palindroma(word, length) {
  //   setting variables for reverse word
  let lastLetter = length - 1;

  let reverseWord = [];

  //   for cycle to check every letter from the front and back of the word

  for (let i = 0; i < length; i++) {
    let checkFront = word[i];

    let checkBack = word[lastLetter];

    lastLetter = lastLetter - 1;

    if (checkFront == checkBack) {
      reverseWord.push(checkBack);
    }
  }

  //   console.log(reverseWord);

  // if to send out the right alert

  if (reverseWord.length == length) {
    alert(userWord + " è una parola palindroma");
  } else {
    alert(userWord + " non è una parola palindroma");
  }
}
