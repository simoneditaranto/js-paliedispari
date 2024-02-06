// Pari e Dispari

// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.


// dichiaro una funzione per generare un numero casule da 1 a 5
function randomComputerNumber() {
    return Math.floor(Math.random() * 5 + 1);
}

// dichiaro una funzione per la somma di due elementi
function sumNumbers(a, b) {
    return a + b;
}

// dichiaro una funzione per stabilire se il numero è pari o dispari
function isEven(number) {
    if(number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


// memorizzo in una variabile la scelta dell'utente (pari o dispari) 
const userChoice = prompt("Pari o dispari?");
// const userChoice = "pari";
console.log(userChoice);
// test

// memorizzo in una variabile il numero scelto dall'utente
const userNumber = prompt("Inserisci un numero da 1 a 5");
// const userNumber = 3;
console.log(userNumber);
// test

// memorizzo in una variabile il numero generato dal computer
const computerNumber = randomComputerNumber();
console.log(computerNumber);

// memorizzo la somma dei due numeri utilizzando la funzione
let sum = sumNumbers(Number(userNumber), Number(computerNumber));
console.log("sum", sum);
let win = isEven(sum);
console.log(win);

if((win && userChoice == "pari") || (!win && userChoice == "dispari")) {
    document.getElementById("result").innerHTML = "Hai vinto!";
} else {
    document.getElementById("result").innerHTML = "Hai perso!";
}
