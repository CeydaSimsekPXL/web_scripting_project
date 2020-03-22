'use strict';

// classes
class Persoon {
    constructor(name, firstName, birthday) {
        this._name = name;
        this._firstName = firstName;
        this._birthday = new Date(birthday.split('-')[0], birthday.split('-')[1], birthday.split('-')[2]);
    }

    // get-set
    //  getters
    get name() {
        return this._name;
    }

    get firstName() {
        return this._firstName;
    }

    get birthday() {
        return this._birthday;
    }

    //  setters
    set name(name) {
        this._name = name;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    set birthday(birthday) {
        this._birthday = birthday;
    }

    // methods
    calculateAge() {
        return Math.floor((Date.now() - this.birthday) / 1000 / 60 / 60 / 24 / 365);
    }

    print() {
        return `${this.name} ${this.firstName}, ${this.calculateAge()} jaar`;
    }
}

// main
let persoon = new Persoon("Özcan", "Eray", "2001-01-24");
console.log(persoon.print());