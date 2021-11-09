let Naam = prompt("Welkom bij het zinderende 'Guess the number' spel! Wat is je naam?");


alert("Hallo " + Naam + " . Ben je klaar voor de sensatie?");

let min = prompt("Hoe spannend gaan we het maken? Voor nu het laagste getal in van de reeks waartussen je wil raden");
let max = prompt("Voer nu het hoogste getal in van de reeks waartussen je wil raden");


const randomNumber = function (min, max) {
    min = Math.ceil(min)
    max - Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const  winningNumber = randomNumber(min, max);


for (i = 1; i <= 5; i++) {
    let gekozenNummer = prompt("Ben je klaar? Raden maar! Voor nu je nummer in")
    console.log(gekozenNummer)
    if (gekozenNummer == winningNumber) {
        alert("Wow! Gefeliciteerd! Het juiste nummer was inderdaad" + winningNumber + "! Top gedaan!");
        i=5
    }
    else if (i === 5) {
        alert("Helaas, dit was de laatste poging, je hebt niet gewonnen")
    }
    else {
        let pogingenover = 5-i;
        alert("Helaas, " + gekozenNummer + " was niet het juiste nummer, je hebt nog " +pogingenover + " pogingen over.")

    };

};







