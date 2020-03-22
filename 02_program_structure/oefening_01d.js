// declaration
let aantalLijnen = 7, interval = 5; counter = 0;
let karakters, karakter = "#";

// print result
for (let i = 1; i <= aantalLijnen; i++) {
    karakters = "";

    for (let j = 0; j < (aantalLijnen - i); j++) {
        karakters += " ";
    }

    for (let j = 0; j < (i * 2 - 1); j++) {
        karakters += counter % interval !== 0 ? "#" : "@";

        /*if (counter % interval !== 0) {
            karakter = "#"
        } else {
            karakter = "@"
        }*/

        //karakters += karakter;
        counter++;
    }

    for (let j = 0; j < (aantalLijnen - (i + 1)); j++) {
        karakters += " ";
    }

    console.log(karakters)
}