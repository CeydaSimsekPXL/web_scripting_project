// functions
function fibonnaci(getal) {
    if (getal > 1) {
        return fibonnaci(getal - 2) + fibonnaci(getal - 1);
    }

    return 1;
}

// main
console.log(fibonnaci(5));