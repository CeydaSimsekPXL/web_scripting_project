'use strict';

// classes
class Point {
    // constructor
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // get-set
    //  getters
    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    //  setters
    set x(x) {
        this._x = x;
    }

    set y(y) {
        this._y = y;
    }
}

class WereledObject {
    // constructor
    constructor(x, y) {
        this.location = new Point(x, y);
    }

    // get-set
    //  getters
    get x() {
        return this.location.x;
    }

    get y() {
        return this.location.y;
    }

    //  setters
    set x(x) {
        this.location.x = x;
    }

    set y(y) {
        this.location.y = y;
    }
}

class Hero extends WereledObject {
    // constructor
    constructor(x, y) {
        super(x, y);
    }

    // methods
    moveDown() {
        super.y = super.y - 1;
    }

    moveUp() {
        super.y = super.y + 1;
    }

    moveLeft() {
        super.x = super.x + 1;
    }

    moveRight() {
        super.x = super.x - 1;
    }
}

// main
let hero = new Hero(5, 5);
console.log(hero);
hero.moveDown();
console.log(hero);
hero.moveLeft();
console.log(hero);
hero.moveRight();
hero.moveRight();
console.log(hero);
hero.moveUp();
hero.moveUp();
hero.moveUp();
console.log(hero);