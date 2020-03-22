// functions
function minimum(...getallen) {
    let retunGetal = getallen[0];
    for (let i = 1; i < getallen.length; i++) {
        if (getallen[i] < retunGetal) {
            retunGetal = getallen[i];
        }
    }

    return retunGetal;
}

// main
console.log("Het minimum is", minimum(6, 8, 9, 4, 5, 10, 2));