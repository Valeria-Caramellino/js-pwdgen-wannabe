/*prova*/
console.log ("hello console");

/*nome utente generato tramite prompt e richiamato in html tramite id e segnalato in console*/
let nomeUtente = prompt("Inserisci il tuo nome!");
/*document.getElementById("nome").innerText = nomeUtente;*/
console.log (`L'utente si chiama ${ nomeUtente } `);

/*cognome utente generato tramite prompt e richiamato in html tramite id e segnalato in console*/
let cognomeUtente = prompt ("Inserisci il tuo cognome!");
/*document.getElementById("cognome").innerText = cognomeUtente;*/
console.log (`Cognome Utente ${ cognomeUtente } `);

/*colore utente generato tramite prompt e richiamato in html tramite id e segnalato in console*/
let coloreUtente = prompt ("Colore preferito");
/*document.getElementById ("colore").innerText = coloreUtente;*/
console.log (`Colore preferito Utente ${ coloreUtente } `);

/* creazione del numero usando una variabile */
let annoCorrente = Number (2023);

/*Creazione pw mettendo insieme tutte le variabili richiamate in html usando id e generate in console*/
document.getElementById ("pw").innerText = ` ${nomeUtente}- ${cognomeUtente}- ${coloreUtente}- ${annoCorrente} `;
console.log (`pw = ${ coloreUtente }- ${cognomeUtente}- ${coloreUtente}- ${annoCorrente} `);