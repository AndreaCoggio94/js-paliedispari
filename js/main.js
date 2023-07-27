// # Pari e Dispari

const userChoice = prompt("Scegli tra pari o dispari");

const userNumber = parseInt(prompt("scrivi un numero da 1 a 5"));

const webNumber = randomNumber(1, 5);

console.log(webNumber);

function randomNumber(min, max) {
  let number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}

const winnerNumber = userNumber + webNumber;

console.log(winnerNumber);

function evenNumber(sum) {
  if (sum % 2 == 0) {
    console.log("pari");
    return true;
  } else {
    console.log("dispari");
    return false;
  }
}

const result = evenNumber(winnerNumber);
