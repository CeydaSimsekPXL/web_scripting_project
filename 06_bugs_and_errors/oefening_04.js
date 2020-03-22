'use strict';

// classes
class Account {
    // instance variables
    _saldo = 0;

    // constructor
    constructor(landcode, banknumber, otherNumbers) {
        this._landcode = landcode;
        this._banknumber = banknumber;
        this._otherNumbers = otherNumbers;
    }

    // get-set
    //  getters
    get saldo() {
        return this._saldo;
    }

    // methods
    _checkNumber() {
        let sum = "";
        for (let i = 0; i < this._otherNumbers.length; i++) {
            if (this._otherNumbers[i] !== " ") {
                sum += this._otherNumbers[i];
            }
        }

        return Number(sum) % 97;
    }

    depositOrWithdraw(money) {
        this._saldo += money;
    }

    print() {
        return `${this._landcode}${this._banknumber} ${this._otherNumbers}${this._checkNumber()}`;
    }
}

// main
let account = new Account("BE", "91", "7350 2858 50");
console.log(account.print());
console.log(account.saldo);
account.depositOrWithdraw(2500);
console.log(account.saldo);
account.depositOrWithdraw(-750);
console.log(account.saldo);