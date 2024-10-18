// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all'utente se pari o dispari e numero da 1 a 5

const userEvenOdd = prompt('Inserisca se "pari" o "dispari"').toString();
const userNumb = parseInt(prompt("Inserisca un numero da 1 a 5"));
const maxRandom = 5;

// console.log(userEvenOdd);
// console.log(userNumb);

// controllo i dati inseriti dall'utente

// genero un numero randomico per i computer

function computerNum(maxRandom) {
  let computerRandom = Math.floor(Math.random() * maxRandom) + 1;

  return computerRandom;
}

// console.log("numero generato casualmente " + computerNum(5));

// sommo i numeri
// stabilisco pari o dispari
// restituisco il vincitore
