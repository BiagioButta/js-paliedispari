"use strict";

// Funzione che genera stringhe casuali con lunghezza stabilita

const minuscole=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

let parolaGenerataHTML = document.getElementById('parolaGenerata');
let genera = document.getElementById('generaParola');

function generaParolaCasuale(lunghezzaParola) {
    let parolaGenerataHTML = '';
    for (let i = 0; i < lunghezzaParola; i++) {
      let parola = Math.floor(Math.random() * minuscole.length);
      parolaGenerataHTML += minuscole[parola];
    }
    return parolaGenerataHTML;
}

let parolaRandom = generaParolaCasuale(0);
parolaGenerataHTML.innerHTML = parolaRandom;
console.log(parolaRandom);

///////////////////////////////////////////

//Inserisco una parola
let inputParola = prompt(' Inserisci una parola');

// if (!isNaN(inputParola)) {
//   // stampo messaggio di errore
//   console.log('Attenzione! Non hai inserito una parola!');
//   // altrimenti
// } else {
//   // stampo la parola inserita
//   console.log(inputParola);
// }

// funzione che la inverte
function invertiParola(stringa){
  let invertiStringa = stringa.split('').reverse().join('');  
  // split trasforma la parola in array
  // reverse lo inverte
  // join riporta la stringa
  return invertiStringa;
}

let parolaInversa = invertiParola(inputParola);

if(inputParola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
////////////////////////////////////////////


// creo un flag vero
let check = true;

// finché check sarà vera
while (check) {
  // chiedo all'utente di scegliere tra pari e dispari
  var scelta = prompt("Scegli tra pari e dispari: ");
  // se la parola inserita è un numero
  if (!isNaN(scelta)) {
    // stampo messaggio di errore
    console.log('Attenzione! Non hai inserito una parola!');
    // altrimenti
  } else {
    // controllo la scelta e stampo il risultato
    switch (scelta) {
      case "pari":
        check = false;
        console.log('Hai scelto: Pari');
        break;
      case "dispari":
        check = false;
        console.log('Hai scelto: Dispari');
        break;
    }
  }
}

// chiedo all'utente di inserire un numero tra 1 e 5 
do {
  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5: "));
} while (!(numeroUtente >= 1 && numeroUtente <= 5)) {
  console.log("Il tuo numero è: " + numeroUtente);
}

// creo una funzione che generi un numero random da 1 a 5 per il computer
function randomNumberPc (min, max) {
  return Math.floor(Math.random() * (max) + min);
}

// e stampo il risultato
var randomNumberPc = randomNumberPc(1, 5);
console.log("Il numero del pc è: " + randomNumberPc);

// sommo i due numeri ottenuti e stampo il risultato
let somma = numeroUtente + randomNumberPc;
console.log("La somma dei due numeri è: " + somma);

// Stabiliamo se la somma dei due numeri è pari o dispari
// se la somma è pari stampo
if (somma%2 == 0) {
  console.log('La somma è pari.');
  // altrimenti
} else {
  console.log('La somma è dispari.');
}

// dichiaro il vincitore
if (scelta == "pari" && somma%2 == 0) {
  console.log("Il vincitore sei tu! :) ");
} else if (scelta == "pari" && somma%2 == 1){
  console.log("Vince il computer :( ");
} else if(scelta == "dispari" && somma%2 == 0){
  console.log("Vince il computer :( ");
} else {
  console.log("Il vincitore sei tu! :) ");
}
