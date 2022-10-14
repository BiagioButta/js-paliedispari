"use strict";

// Funzione che genera "parole" casuali con lunghezza stabilita

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

let parolaRandom = generaParolaCasuale(100);
parolaGenerataHTML.innerHTML = parolaRandom;
console.log(parolaRandom);

///////////////////////////////////////////


let inputParola = 'otto';

function invertiParola(stringa){
  let invertiStringa = stringa.split('').reverse().join('');  
  //split trasforma la parola in array
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
  
