/* Selettori */
const loggedOrNot = document.getElementById("logged-or-not");
const rollingDice = document.getElementById("rolling-dice");
const showNum = document.getElementById("show-num");
const muResult = document.getElementById("my-result");
const ShowNum2 = document.getElementById("show-num-2");
const pcResult = document.getElementById("pc-result");





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