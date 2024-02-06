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

/* ____________________________________________________________________ */

// memorizzo i miei bottoni
evenButtonElement = document.querySelector("#even");
oddButtonElement = document.querySelector("#odd");

// memorizzo in una variabile la scelta dell'utente (pari o dispari) 
let userChoice;

// memorizzo in una variabile la scelta dell'utente
// let userNumber = 0;

// bottone pari
evenButtonElement.addEventListener("click", 

    function() {

        evenButtonElement.className = "active";
        oddButtonElement.className -= "active";
    }

);

// bottone dispari
oddButtonElement.addEventListener("click", 

    function() {

        oddButtonElement.className = "active";
        evenButtonElement.className -= "active";
     
    }

);

// memorizzo il mio bottone "gioca"
playButtonElement = document.querySelector("#play");
playButtonElement.addEventListener("click",
    function() {


        let userNumber;

        // memorizzo la scelta dell'utente
        if(evenButtonElement.classList.contains("active")) {
            userChoice = "pari";
        } else {
            userChoice = "dispari";
        }

        userNumber = document.querySelector("#user-number").value;

        if((!evenButtonElement.classList.contains("active") && !oddButtonElement.classList.contains("active")) ||
            userNumber < 1 || userNumber > 5) {
                document.getElementById("error").innerText = `Non hai scelto pari o dispari, oppure hai inserito un numero non compreso tra 1 e 5`;
                // document.getElementById("user").innerText = "";
                // document.getElementById("computer").innerText = "";
                // document.getElementById("result").innerText = "";
                
        } else {

            document.getElementById("error").innerText = "";

            // memorizzo in una variabile il numero generato dal computer
            const computerNumber = randomComputerNumber();
    
            // stampo in pagina i dati 
            // document.getElementById("user").innerText = `Hai scelto ${userChoice}, hai lanciato il numero ${userNumber}`;
            document.querySelector("#user img").src = `./img/${userNumber}.png`;
            document.getElementById("computer").innerText = `Il computer ha lanciato ${computerNumber}`;
    
            // memorizzo la somma dei due numeri eutilizzando la funzione
            let sum = sumNumbers(Number(userNumber), Number(computerNumber));
            // utilizzo la funzione per sapere se il numero è pari o dispari
            let win = isEven(sum);
    
            // controllo se l'utente ha vinto oppure no e stampo in pagina il risultato
            if((win && userChoice == "pari") || (!win && userChoice == "dispari")) {
                document.getElementById("result").innerText = `La somma è ${sum}, HAI VINTO!`;
            } else {
                document.getElementById("result").innerText = `La somma è ${sum}, HAI PERSO!`;
            }

        }

    }
)