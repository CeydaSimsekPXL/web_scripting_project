// function
function maakRij(min, max, stap = 1) {
    let rij = [min];
    for (let i = (min + stap); ; i+=stap) { // hier kan niet gewerkt worden met een vergelijking omdat je kunt switchen tussen <= >=
        rij.push(i);

        if (i === max) {
            break;
        }
    }

    return rij;
}

// main
console.log(maakRij(1, 5));
console.log(maakRij(1, 5, 2));
console.log(maakRij(5, 1, -1));
console.log(maakRij(5, 1, -2));