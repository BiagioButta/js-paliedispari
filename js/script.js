"use strict";

const slideHTML =document.querySelectorAll('.slide');
const prevBtnHTML =document.querySelector('.prevBtn');
const nextBtnHTML =document.querySelector('.nextBtn');


// forEach mi assegna la funzione ad ogni elemento
// la funzione mi indica di quanto sarà spostata la slide a sinistra
// a 100% si puù sostituire un altra grandezza

slideHTML.forEach( function(slide, spazioASinistra){
  slide.style.left = `${spazioASinistra * 100}%`
});


let numeroPagina = 0;

// al click viene aumentato o diminuito il numeroPagina e viene applicata la funzione
nextBtnHTML.addEventListener('click', function(){
  numeroPagina++;
  scorrerePagine();
});
prevBtnHTML.addEventListener('click', function(){
  numeroPagina--;
  scorrerePagine();
});


function scorrerePagine(){

  // viene aggiunto - 1 altrimenti alla fine resterebbe una pagina vuota
  if(numeroPagina < slideHTML.length - 1){
    nextBtnHTML.style.display = 'block';
  }else{
    nextBtnHTML.style.display = 'none';
  }

  if(numeroPagina > 0){
    prevBtnHTML.style.display = 'block';
  }else{
    prevBtnHTML.style.display = 'none';
  }

  // quando viene applicata la funzione la pagina si sposta dei parametri assegnati
  slideHTML.forEach( function(slide){
    slide.style.transform = `translateX(-${numeroPagina * 100}%)`
  })
}

prevBtnHTML.style.display = 'none';

///////////////////////////////////////////

//Inserisco una parola
let inputParolaHTML =document.getElementById('inputParola.value');
let verificaPalinromaHTML =document.getElementById('verificaPalindroma');
let esitoHTML = document.getElementById('esito');


function invertiStringa(stringa) {
  let parola = stringa.split('').reverse().join('');
  return parola;
}


verificaPalinromaHTML.addEventListener ('click', function(){
  invertiStringa();
  if(invertiStringa(inputParolaHTML)){
    esitoHTML.innerHTML = 'La parola è palindroma'
  }else{
    esitoHTML.innerHTML = 'La parola non è palindroma'
  }
  esitoHTML.innerHTML= '';
})
  
// ////////////////////////////////////////////


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
  console.log("Il vincitore sei tu ");
} else if (scelta == "pari" && somma%2 == 1){
  console.log("Vince il computer ");
} else if(scelta == "dispari" && somma%2 == 0){
  console.log("Vince il computer");
} else {
  console.log("Il vincitore sei tu!dispari ");
}
