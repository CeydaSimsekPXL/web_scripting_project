// declaration
let prompt = require('prompt-sync')();
let number;
let randomNumber = Math.floor(Math.random() * 10 + 1);

// guess randomNumber
console.log(randomNumber);
console.log("Probeer het getal te raden:");
do {
    number = Number(prompt("Raad het getal: "));
} while (number !== randomNumber);

console.log();
console.log("Je hebt het getal geraden!");