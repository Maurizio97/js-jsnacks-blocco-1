/* 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


// creo una variabile per il div dove stamperò la somma dei numeri
const stamp = document.querySelector(".stamp");
//creo una variabile per salvarmi la somma
let somma = 0;
// creo un contatore per modificare il numero della lista che esce nel promt, in modo da avere un riferimento ogni volta che esce un nuovo promt
let i = 1;
// creo un ciclo per chiedere all'utente di inserire 10 volte un numero => while
while ( i = 10){
    // creo un promp per far si che l'utente inserisca il numero
    const numN = parseInt(prompt("inserisci un numero. questo è il numero" + ` ${i}`));
    // sommo la variabile col nuovo numero inserito
    somma = somma + numN;
    i++;
}
    //stampo la somma
    stamp.innerHTML = `La somma è: ${somma}`;
    
