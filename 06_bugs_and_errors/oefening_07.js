'use strict';

// classes
class Date {
    // class variables
    static MONTHS = ["jan", "feb", "mar", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

    // constructor
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    // get-set
    //  getters
    get day() {
        return this._day
    }

    get month() {
        return this._month
    }

    get year() {
        return this._year
    }

    //  setters
    set day(day) {
        this._day = day;
    }

    set month(month) {
        this._month = month;
    }

    set year(year) {
        this._year = year;
    }

    // methods
    static make = (day, month, year) => {return new Date(day, month, year)};
    print = () => {return `${this._day}/${this._month}/${this._year}`};
    printMonth = () => {return `${this._day}/${Date.MONTHS[this._month - 1]}/${this._year}`};
}

// main
let date1 = Date.make(24, 1, 2001);
console.log(date1.print());
console.log(date1.printMonth());