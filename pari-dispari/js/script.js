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

// memorizzo in una variabile il numero scelto dall'utente
const userNumber = prompt("Inserisci un numero da 1 a 5");


// memorizzo in una variabile il numero generato dal computer
const computerNumber = randomComputerNumber();

document.getElementById("user").innerHTML = `Hai scelto ${userChoice}, hai lanciato il numero ${userNumber}`;
document.getElementById("computer").innerHTML = `Il computer ha lanciato ${computerNumber}`;

// memorizzo la somma dei due numeri utilizzando la funzione
let sum = sumNumbers(Number(userNumber), Number(computerNumber));
let win = isEven(sum);

// controllo se l'utente ha vinto oppure no
if((win && userChoice == "pari") || (!win && userChoice == "dispari")) {
    document.getElementById("result").innerHTML = `La somma è ${sum}, HAI VINTO!`;
} else {
    document.getElementById("result").innerHTML = `La somma è ${sum}, HAI PERSO!`;
}
