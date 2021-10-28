/* 6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.
 */

// creo una variabile per il div dove stamperò la somma dei numeri
const stamp = document.querySelector(".stamp");
// creo un array vuoto
let randNum = [];


// creo un ciclo nella quale creerò una serie di numeri random
while (randNum.length < 50) {
    //creo una variabile che diventa vera ogni volta che un numero è diverso da quelli della lista
    let diffNumber = false;
    // genero un numero random 
    let numGen = Math.floor(Math.random() * 100 + 1);

    //confronto il numero generato con tutti quelli della lista partendo dal primo
    for(let i = 0; i < randNum.length; i++) {
        // se il numero è uguale a uno di quelli della lista la variabile di controllo diventa vera
        if ( randNum[i] == numGen){
            diffNumber = true
        }
    }
        
    if (!diffNumber){
        randNum.push(numGen);
    }
}
console.log(randNum);
