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
let finalResult = "";

// console.log("pari o dispari user " + userEvenOdd);
// console.log("numero user " + userNumb);

// controllo i dati inseriti dall'utente
let userNumbCheck = userNumb > 0 && userNumb < 6 ? true : false;
let userEvenOddCheeck =
  userEvenOdd == "pari" || userEvenOdd == "dispari" ? true : false;
if (userNumbCheck && userEvenOddCheeck) {
  // genero un numero randomico per i computer

  function computerNum(maxRandom) {
    const computerRandom = Math.floor(Math.random() * maxRandom) + 1;

    return computerRandom;
  }

  const randomNumber = computerNum(maxRandom);
  //   console.log("numero generato casualmente " + randomNumber);

  // sommo i numeri

  function numberSum(userNum, randomicNum) {
    const result = userNum + randomicNum;
    return result;
  }

  const finalSum = numberSum(userNumb, randomNumber);
  //   console.log(finalSum);

  // stabilisco pari o dispari

  function evenOrOdd(sum) {
    let evenOdd;

    if (sum % 2 !== 0) {
      evenOdd = false;
    } else {
      evenOdd = true;
    }

    if (evenOdd === false) {
      return "è dispari";
    } else {
      return "è pari";
    }
  }

  const evenOdd = evenOrOdd(finalSum);
  //   console.log(evenOdd);

  // restituisco il vincitore

  if (
    (userEvenOdd == "pari" && evenOdd == "è pari") ||
    (userEvenOdd == "dispari" && evenOdd == "è dispari")
  ) {
    finalResult = "Complimenti hai vinto!";
  } else {
    finalResult = "Questa volta ha vinto il computer...";
  }

  alert(`La sua scelta è stata ${userEvenOdd}\n
Ed il numero scelto da lei è ${userNumb}\n
Il numero scelto dal computer è ${randomNumber}\n
La somma dei due numeri è ${finalSum} ed è un numero ${evenOdd}\n
${finalResult}`);
} else {
  alert("Ricontrollare i dati inseriti");
  const userEvenOdd = prompt('Inserisca se "pari" o "dispari"').toString();
  const userNumb = parseInt(prompt("Inserisca un numero da 1 a 5"));
}
