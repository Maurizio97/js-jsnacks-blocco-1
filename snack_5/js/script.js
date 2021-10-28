/*  5 - Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

// creo una variabile per il div dove stamperò la somma dei numeri
const stamp = document.querySelector(".stamp");
// creo un arrey vuoto
let listNum = [];
// chiedo all' di inserirer un numero per 6 volte tramite un promt => For {promt}
for ( let i = 0; i < 6; i++) {
    const num = parseInt(prompt("inserisci un numero." + ` ${i + 1} di 6`))
    // se il valore inserito è non è multiplo di due (è pari) lo inserisco nella lista 
    if (num % 2){
        listNum.push(num)
    }
}
    console.log(listNum);