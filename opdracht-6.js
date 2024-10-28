// **************** OPDRACHT 6: ASSOCIATIE / COMPOSITIE ****************

console.log("---------------------\nOutput opdracht 6:")

// Superklasse Dier
class Dier {
  naam;
  leeftijd;

  constructor(naam, leeftijd) {
      this.naam = naam;
      this.leeftijd = leeftijd;
  }

  geluidMaken() {
    return "-----";
  }

  beschrijf() {
    return "Dit dier heet " + this.naam + " en is " + this.leeftijd + " jaar oud."
  }
}

class Medewerker {
  personeelsnummer;
  naam;

  constructor(personeelsnummer, naam) {
    this.personeelsnummer = personeelsnummer;
    this.naam = naam;
  }

  beschrijf() {
    return "Deze medewerker heet " + this.naam + "en heeft personeelsnummer " + this.personeelsnummer
  }
}

class Verzorger extends Medewerker {
  isGediplomeerd;

  constructor(personeelsnummer, naam, isGediplomeerd) {
    super(personeelsnummer, naam);
    this.isGediplomeerd = isGediplomeerd;
  }

  beschrijf() {
    return super.beschrijf + "en 'isGediplomeerd' is:)" + this.isGediplomeerd;
  }
}

/* Oefening 6a: Maak subklassen voor Vogel en Vis
  Maak twee subklassen van Dier: Vogel en Vis
  De klasse Vogel heeft als eigen specifieke attributen 'spanwijdte' (waarde in centimeters) en 'isMigrerend' (dit is een boolean waarde).
  De klasse Vis heeft als eigen specifieke attribuut 'diepte' (waarde in meters).
  Beide subklassen overschrijven de methode 'geluidMaken()'.
  Een object van de klasse Vogel geeft "bjilp tjilp" als geluid;
  Een object van de klasse Vis geeft "blub blub" als geluid.
*/

// TODO: maak hieronder de twee gevraagde klassenbeschrijvingen




console.log("Controleren van code voor oefening 6a:");
var calimero = new Vogel("Calimero", 1, 30, false);
var nemo = new Vis("Nemo", 1, 5);

console(calimero.naam + "zegt: " + calimero.geluidMaken());
console(nemo.naam + "zegt: " + nemo.geluidMaken());


/* Oefening 6b: Maak een class Dierentuin
  Maak het beginnetje van de class Dierentuin hieronder af, met volgende attributen:
  - naam, dit is de naam van de Dierentuin
  - #dieren, dit is een private attribuut dat verwijst naar een array met alle dier-objecten van de dierentuin (dus ook vogels en vissen)
  - #verzorgers, dit is een private attribuut dat verwijst naar een array met alle verzorger-objecten van de dierentuin
  - directeur, dit is een verwijzing naar een medewerker-object.

  Maak een constructor die alleen een naam van de dierentuin en de directeur wil (zie gegeven code). 
  De attributen 'dieren' en 'verzorgers' geef je in de constructor de waarde []
*/

class Dierentuin {
  #dieren;
  #verzorgers;

  constructor(naam, directeur) {

  }

  beschrijf() {
    return "Deze dierentuin heet " + this.naam + "en heeft " + this.#dieren.length + " dieren en " + this.#verzorgers.length + "verzorgers."
  }
}

console.log("Controleren van code voor oefening 6b:");

var baas = new Medewerker("1", "dhr Hoogsmahoed");
var blijdorp = new Dierentuin("Blijdorp", baas);
console.log("Er is een nieuwe dierentuin: " + blijdorp.beschrijf());


/* Oefening 6c: Breidt class Dierentuin uit
  Verander hierboven de class Dierentuin en voeg de methode 'voegDierToe(nieuwDier)' toe,
  om hiermee een dier toe te voegen aan het attribuut '#dieren'
  Doe hetzelfde voor #verzorgers.
*/

blijdorp.voegDierToe(nemo);
blijdorp.voegDierToe(calimero);
console.log("Er zijn twee dieren toegevoegd:" + blijdorp.beschrijf());

var verzorgerA = new Verzorger(121, "Piet van Dongen");
blijdorp.voegVerzorgerToe(verzorgerA);

console.log("Er zijn twee dieren toegevoegd:" + blijdorp.beschrijf());


/* Oefening 6d: Breidt class Dierentuin opnieuw uit
  Voeg aan de klasse Dierentuin een methode toe die van alle dieren
  de naam toont en daarachter het geluid dat ze maken, zoals bijvoorbeeld: 'calimero: tjilp, tjilp'
*/
