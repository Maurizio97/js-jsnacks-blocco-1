/* 2- L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

// creo una variabile per il div dove stamperò le parole
const stamp = document.querySelector(".stamp");
// creo il primo promt dove inserirò la prima parola (x)
const wordX = prompt("inserisci una parola");

// creo il secondo promt dove inserirò la seconda parola (y)
const wordY = prompt("inserisci un'altra parola");

// confronto la lunghezza delle due parole

    if (wordX.length === wordY.length) {
        // se le parole sono lunghe uguali le stampo in ordine di inserimento e lo faccio presente
        stamp.innerHTML = `le parole sono lunghe uguali: 1=${wordX}, 2=${wordY}.`;
    } else if (wordX.length < wordY.length) {
        // se la parola "x" è più corta della parola "y" stampo prima x 
        stamp.innerHTML = `la parola più corta è '${wordX}' e la più lunga è '${wordY}'.`;
    } else {
        // altrimenti stampo prima la parola "y"
        stamp.innerHTML = `la parola più corta è '${wordY}' e la più lunga è '${wordX}'.`;
    }
