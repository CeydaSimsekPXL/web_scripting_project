// declaration
let aantalLijnen = 7;
let karakters;

// print result
for (let i = 1; i <= aantalLijnen; i++) {
    karakters = "";

    for (let j = 0; j < (aantalLijnen - i); j++) {
        karakters += " ";
    }

    for (let k = 0; k < i; k++) {
        karakters += "#";
    }

    console.log(karakters)
}