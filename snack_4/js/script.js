/* 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */


// creo una variabile per il div dove stamperò la somma dei numeri
const stamp = document.querySelector(".stamp");
//creo una lista con gli invitati
const listInv = ["Mario", "Luigi", "Franco", "Simone", "Adriano", "Loris", "Giggi", ];
// chiedo all'utente il suo nome con un promt
const nameUser = prompt("inserisci il tuo nome");
//creo una variabile per capire se si trova nella lista
let found = 0;
// confronto il nome dell'utente con tutti quelli della lista in successione => For
for (let i = 0; i < listInv.length; i++){
    if (nameUser === listInv[i]){
        found = 1;
    }
}
// se il nome combacia con uno della lista gli dico che può partecipare
if (found){
    stamp.innerHTML = `${nameUser} sei in lista puoi partecipare`;
} else {
    //altrimenti gli dico che non può partecipare
    stamp.innerHTML = `${nameUser} non sei in lista`;
}

