// # Pari e Dispari

const userChoice = prompt("Scegli tra pari o dispari");

// check for "pari o dispari"
const lowerUserChoice = userChoice.toLowerCase();

if (lowerUserChoice === "pari" || lowerUserChoice === "dispari") {
  // number request

  const userNumber = parseInt(prompt("scrivi un numero da 1 a 5"));

  const webNumber = randomNumber(1, 5);

  console.log(webNumber);

  const winnerNumber = userNumber + webNumber;

  console.log(winnerNumber);

  const result = evenNumber(winnerNumber);
} else {
  console.log("scrivi pari o dispari");
}

// generate random number function

function randomNumber(min, max) {
  let number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}

// function to check even numbers

function evenNumber(sum) {
  if (sum % 2 == 0) {
    console.log("pari");
    return true;
  } else {
    console.log("dispari");
    return false;
  }
}
