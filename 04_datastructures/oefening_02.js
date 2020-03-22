// functions
function isEven(getal) {
    if (getal > 1) {
        return isEven(getal - 2);
    }

    return !getal;
    //return ((getal + 1) % 2);
}

// main
console.log(isEven(0));
console.log(isEven(2));
console.log(isEven(4));
console.log(isEven(6));
console.log();
console.log(isEven(1));
console.log(isEven(3));
console.log(isEven(5));
console.log(isEven(7));