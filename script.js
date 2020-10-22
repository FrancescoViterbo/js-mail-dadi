/* Selettori */
const loggedOrNot = document.getElementById("logged-or-not");





/* Email in archivio */
const emails = ["francesco@live.com", "marco@live.com", "andrea@live.com", "simone@live.com", "luca@live.com", "cristina@live.com",
"anna@live.com", "antonio@live.com", "vanessa@live.com", "pamela@live.com", "dario@live.com", "christian@live.com", "francesco@gmail.com",];

const userEmail = prompt("Inserisci la tua email:");

var emailsMatches = 0;

for (i = 0; i < emails.length; i++) {
    if (userEmail === emails[i]) {
        emailsMatches++;
    }
}
console.log(emailsMatches);

if (emailsMatches > 0) {
    loggedOrNot.innerHTML = "L'email fornita è registrata nel nostro archivio, puoi giocare scommettendo denaro.<br> Attenzione, il gioco d'azzardo crea sonnolenza.";
} else {
    loggedOrNot.innerHTML = "L'email fornita non è registrata nel nostro archivio, puoi giocare senza scommettere denaro.";
}