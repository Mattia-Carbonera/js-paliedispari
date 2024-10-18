// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola
const userWord = prompt("Digiti una parola");
console.log(`La tua parola è: "${userWord}"`);

// controllo che la parola sia valida
// verifico se la parola letta al contrario è uguale

function isPalindrome(userWord) {
  let splittedUserWord = userWord.split("");
  const reversingWord = splittedUserWord.reverse();
  // console.log(reversingWord);

  const reversedUserWord = reversingWord.join("");
  console.log(reversedUserWord);

  // verifico
  result =
    userWord == reversedUserWord
      ? "La parola scelta è palindroma"
      : "La parola scelta non è palindroma";

  // restituisco il risultato all'utente
  return result;
}
