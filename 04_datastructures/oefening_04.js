// functions
function telChar(zin, letter) {
    let counter = 0;
    for (let i = 0; i < zin.length; i++) {
        if (zin[i] === letter) {
            counter++;
        }
    }

    return counter;
}

function telB(zin) {
    return telChar(zin, "B");
}

// main
console.log(telChar("BdB", "s"));
console.log(telChar("BdB", "d"));
console.log(telB("BdB"));