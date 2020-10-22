/* Selettori */
const loggedOrNot = document.getElementById("logged-or-not");

const rollingDice = document.getElementById("rolling-dice");
const showNum = document.getElementById("show-num");
const myResult = document.getElementById("my-result");

const rollingDice2 = document.getElementById("rolling-dice-2");
const ShowNum2 = document.getElementById("show-num-2");
const pcResult = document.getElementById("pc-result");

const resultTitle = document.getElementById("result-title");
const result = document.getElementById("result");

const btn = document.getElementById("btn");

/* Nascondo elementi inutili */
resultTitle.style.display = "none";
showNum.style.display = "none";
ShowNum2.style.display = "none";

/* Email in archivio */
const emails = ["francesco@live.com", "marco@live.com", "andrea@live.com", "simone@live.com", "luca@live.com", "cristina@live.com",
"anna@live.com", "antonio@live.com", "vanessa@live.com", "pamela@live.com", "dario@live.com", "christian@live.com", "francesco@gmail.com",];

/* Prompt per inserire la propria mail */
const userEmail = prompt("Inserisci la tua email:");

/* Variabile di controllo corrispondenze */
var emailsMatches = 0;

/* Itero nell'array, se trovo corrispondenze "emailsMatches" viene incrementata di 1 */
for (i = 0; i < emails.length; i++) {
    if (userEmail === emails[i]) {
        emailsMatches++;
    }
}

/* Mostro un messaggio per confermare o negare la presenza dell'email in archivio */
if (emailsMatches > 0) {
    loggedOrNot.innerHTML = "L'email fornita è registrata nel nostro archivio, puoi giocare scommettendo denaro.<br> Attenzione, il gioco d'azzardo crea sonnolenza.";
} else {
    loggedOrNot.innerHTML = "L'email fornita non è registrata nel nostro archivio, puoi giocare senza scommettere denaro.";
}

btn.addEventListener("click", tiraDado);

function tiraDado(){
    let numeri = [1, 2, 3, 4, 5, 6];
    let gamerResult = Math.floor(1 + Math.random() * 6);
    let botResult = Math.floor(1 + Math.random() * 6);
    let risultato;
    if (gamerResult > botResult){
        risultato = "Hai Vinto!";
    } else if (gamerResult === botResult){
        risultato = "Pareggio!";
    } else {
        risultato = "Hai Perso!";
    }
    // return [gamerResult, botResult, risultato];
    mostraNumeroGiocatore(gamerResult);
    mostraNumeroPC(botResult);
    mostraRisultato(risultato);
}

function mostraNumeroGiocatore(gamerResult){
    showNum.style.display = "block";
    let msg = gamerResult.toString();
    myResult.innerHTML = msg;
}

function mostraNumeroPC(botResult){
    ShowNum2.style.display = "block";
    let msg = botResult.toString();
    pcResult.innerHTML = msg;
}

function mostraRisultato(risultato){
    resultTitle.style.display = "block";
    let msg = risultato;
    result.innerHTML = msg;
}