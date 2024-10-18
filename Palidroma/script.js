// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola
const userWord = prompt("Digiti una parola");

// controllo che la parola sia valida
checkedUserWord = userWord.toString();
console.log(`La tua parola è: "${checkedUserWord}"`);

// verifico se la parola letta al contrario è uguale

function isPalindrome(checkedUserWord) {
  let splittedUserWord = checkedUserWord.split("");
  const reversingWord = splittedUserWord.reverse();
  // console.log(reversingWord);

  const reversedUserWord = reversingWord.join("");
  console.log(reversedUserWord);

  // verifico
  result =
    checkedUserWord == reversedUserWord
      ? "La parola scelta è palindroma"
      : "La parola scelta non è palindroma";

  // restituisco il risultato all'utente
  return result;
}

alert(isPalindrome(checkedUserWord));
