'use strict';

// declaration and initialisation
let persoon = {
    naam: "Özcan",
    voornaam: "Eray",
    geboortedatum: new Date(2001, 0, 24),
    berekenleeftijd() {
        return Math.floor((Date.now() - this.geboortedatum) / 1000 / 60 / 60 / 24 / 365); // berekend niet goed!
    },
    print() {
        return `${this.naam} ${this.voornaam}, ${this.berekenleeftijd()} jaar`;
    }
};

// main
console.log(persoon.print());