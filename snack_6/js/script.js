/* 6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.
 */

// creo una variabile per il div dove stamperò la somma dei numeri
const stamp = document.querySelector(".stamp");
// creo un array vuoto
const randNum = [];
// creo un ciclo nella quale creerò una serie di numeri random
while (randNum.length < 10) {
    // genero un numero random 
    const numGen = Math.floor(Math.random() * 10 + 1);
    randNum.push(numGen);

    //confronto il numero generato con tutti quelli della lista partendo dal primo
    for(let i = 0; i < randNum.length; i++) {
        console.log(randNum);
        // se il numero è diverso da tutti quelli della lista lo inserisco 
        //if ( numGen != randNum[i]){
       // }
    }
}
    //console.log(randNum);