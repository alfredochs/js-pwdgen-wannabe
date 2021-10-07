let nomeUtente = prompt("Inserisci il tuo nome:")
let cognomeUtente = prompt ("Inserisci il tuo cognome:")
let colorePreferito = prompt("Il tuo colore preferito:")
const numeroPredefinito = "21"

const passwordGenerata = `${nomeUtente}${cognomeUtente}${colorePreferito}${numeroPredefinito}`
alert("La tua password generata è: " + passwordGenerata);

console.log("La tua password generata è:", passwordGenerata);
