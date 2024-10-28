// **************** OPDRACHT 5: EENVOUDIGE INKAPSELING ****************

console.log("Output van opdracht 5:")

/* *** Oefening 5a: Maak attributen private
Verander de class Boek zo, dat de attributen private zijn
Controleer na je veranderingen of de gegevens van boekA nog steeds
worden geprint in de console */

class Boek {
  auteur;
  titel;

  constructor(auteur, titel) {
    this.auteur = auteur;
    this.titel = titel;
  }

  printGegevens() {
    console.log("Auteur: " + this.auteur + "titel: " + this.titel);
  }
}

var boekA = new Boek("Tolkien", "The Hobbit");
console.log("Gegevens van boek A:")
boekA.printGegevens();


/* *** Oefening 5b: Probeer stiekem toch te veranderen...
Hieronder staan regels code met // ervoor.
Deze regels proberen toch een attribuut te lezen of te schrijven
Haal deze // weg weg en vul de code van de tweede regel na de = aan, zodat je
de titel aanpast en kijk in de console welke melding je krijgt.
Hint: het gaat niet werken, zet alle // hieronder maar weer terug */


// console.log("Poging tot direct uitlezen van auteur:");
// console.log(boekA.#auteur)
// boekA.#titel = 
// console.log("Gegevens van boek A, na poging tot aanpassen van titel:")
// boekA.printGegevens();


/* *** Oefening 5c: Voeg getters toe
Pas helemaal bovenaan de class Boek zo aan, dat je met behulp van getter-methoden
de titel en de auteur op kunt vragen. Haal bij de regels hieronder
de // weg, zodat je kunt controleren of het correct werkt */


// console.log("oefening 5c")
// console.log("Titel van boek, verkregen met getter:")
// console.log(boekA.getTitel());
// console.log("Auteur van boek, verkregen met getter:")
// console.log(boekA.getAuteur());


/* *** Oefening 5d: Setter met voorwaarden
Pas helemaal bovenaan de class Boek op de volgende manier aan:
  - voeg een nieuw private attribuut 'voorraad' toe
  - pas de methode printGegevens aan, zodat ook de voorraad geprint wordt
  - vergeet de het nieuwe attribuut ook niet in de constructor mee te nemen
  - maak een getter waarmee je de vooraad op kunt vragen
  - maak een setter waarmee je de vooraad kunt wijzigen, maar
    zorg ervoor dat je de voorraad negatief kunt laten zijn.
    Tip 1: je setter methode heeft een argument nodig, bijv zo:
      setVoorraad(nieuweVoorraad) {
        // bedenk zelf wat hier moet komen
      }
    Tip 2: om ervoor te zorgen dat de voorraad niet negatief wordt,
           moet je voordat je een aanpassing doet controleren of de
           waarde van nieuweVoorraad kleiner is dan 0

Haal de bij onderstaande regels code de // weg en controler de uitkomst in de console
*/

// console.log("oefening 5d")
// nieuw boek-object aanmaken, met voorraad 4
// var boekB = new Boek("Tolkien", "Lord of the Rings", 4);

// console.log("Voorraad wijzigen met setter, daarna gegevens printen");
// boekB.setVoorraad(20);
// boekB.printGegevens();

// console.log("Voorraad met setter wijziging in -15, vooraad moet automatisch 0 worden:");
// boekB.setVoorraad(-15);
// boekB.printGegevens();

// console.log("Opnieuw een boek-object aanmaken, maar met negatieve vooraad, vooraad moet automatisch 0 worden:");
// var boekC = new Boek("Tolkien", "The Silmarillion", -7);
// boekC.printGegevens();