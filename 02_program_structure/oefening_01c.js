// declaration
let aantalLijnen = 7;
let karakters;

// print result
for (let i = 1; i <= aantalLijnen; i++) {
    karakters = "";

    for (let j = 0; j < (aantalLijnen - i); j++) {
        karakters += " ";
    }

    for (let j = 0; j < (i * 2 - 1); j++) {
        karakters += "#";
    }

    for (let j = 0; j < (aantalLijnen - (i + 1)); j++) {
        karakters += " ";
    }

    console.log(karakters)
}