'use strict';
class InputError extends Error{}

// classes
class Vec {
    // constructors
    constructor(x, y) {
        if (typeof x === "number" && typeof y === "number") {
            this._x = x;
            this._y = y;
        } else {
            throw new InputError("not a number");
        }
    }

    // get-set
    //  getters
    /*get length() {
        return this._length;
    }*/

    // methods
    plus(vec) {
        if (vec instanceof Vec) {
            return new Vec(this._x + vec._x, this._y + vec._y);
        } else {
            throw new InputError("not a Vec-object");
        }
    }

    minus(vec) {
        if (vec instanceof Vec) {
            return new Vec(this._x - vec._x, this._y - vec._y);
        } else {
            throw new InputError("not a Vec-object");
        }
    }

    toString() {
        return `(${this._x}, ${this._y})`;
    }
}

// main
try {
    let vector = new Vec(5, 5);
} catch (error) {
    console.log(`Error: ${error.message}`);
} finally {
    console.log("Done");
}