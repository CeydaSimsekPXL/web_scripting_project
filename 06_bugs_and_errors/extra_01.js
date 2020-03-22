'use strict';

// methods
function calculate(a, b, c) {
    let discriminant = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    let x1, x2;

    try {
        if (discriminant >= 0) {
            x1 = (-b + discriminant) / (2 * a);
            x2 = (-b - discriminant) / (2 * a);

            return [x1, x2];
        } else {
            throw new Error("Negatieve discriminant");
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

// main
let result = calculate(200, 300, 100);

if (result !== undefined) {
    console.log(`x1: ${result[0]}, x2: ${result[1]}`);
}