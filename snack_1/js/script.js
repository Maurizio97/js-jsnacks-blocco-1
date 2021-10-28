/* 1 - L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */



// creo una variabile per il div dove stamperò il numero
const stamp = document.querySelector(".stamp");
// creo il primo promt (x)
const numX = parseInt(prompt("inserisci un numero"));
// creo il secondo promt (y)
const numY = parseInt(prompt("inserisci un altro  numero"));
// confronto i due numeri
    // se sono uguale gli dico che sono pari
    if( numX === numY) {
        stamp.innerHTML = `non c'è un numero maggiore`;

    } else if (numX > numY ) { 
         // se è maggiore il numero "x" stampo "x" 
        stamp.innerHTML = `il maggione è: ${numX}`;

    } else { 
        // altrimenti stampo "y"
        stamp.innerHTML = `il maggione è: ${numY}`;
    }
