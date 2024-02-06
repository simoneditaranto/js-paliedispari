// Palidroma

// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma
// (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)


// dichiaro la funzione per capire se una parola è palindroma
function isPalindrome(word) {

    // memorizzo un contatore per leggere i caratteri uno alla volta partendo dall'ultimo
    let counter = word.length - 1;
    // memorizzo una variabile che si incrementa ogni volta che una lettera è uguale alla sua opposta  
    let correct = 0;

    // ciclo la parola e controllo se la lettera è uguale a quella presente nell'indice opposto
    for(let i = 0; i <= counter; i++) {
        if(word.charAt(i) == word.charAt(counter)) {
            correct++;
            if(i == counter) {
                // se la parola ha un numero di caratteri dispari e sto controllando il carattere centrale
                correct--;
            }
        }
        counter--;
    }

    // se ogni controllo è andato a buon fine la variabile "correct" sarà uguale alla metà della lunghezza della parola
    if(correct == Math.floor(word.length / 2)) {
        return true;
    } else {
        return false;
    }

}


// memorizzo in una variabile la parola scelta dall'utente
const userWord= prompt("Inserisci una parola");

const win = isPalindrome(userWord);

if(win) {
    document.getElementById("result").innerHTML = `La parola che hai inserito è '${userWord}' ed è PALINDROMA`;
} else {
    document.getElementById("result").innerHTML = `La parola che hai inserito è '${userWord}' e NON E' palindroma`;
}
