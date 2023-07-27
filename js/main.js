// # Pari e Dispari

const userChoice = prompt("Scegli tra pari o dispari");

const userNumber = parseInt(prompt("scrivi un numero da 1 a 5"));

const webNumber = randomNumber(1, 5);

console.log(webNumber);

function randomNumber(min, max) {
  let number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}
