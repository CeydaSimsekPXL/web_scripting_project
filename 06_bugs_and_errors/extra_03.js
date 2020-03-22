'use strict';

// main
let oppervlakte = {
    bereken(a, b, c) {
        try {
            let s = (a + b + c) / 2;
            let oppervlakte = Math.sqrt(s * (s - a) * (s - b) * (s - c));

            if (oppervlakte <= 0 || isNaN(oppervlakte) === true) {
                throw new Error("Er kon geen driehoek gevormd worden");
            }

            return oppervlakte;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
};

console.log(oppervlakte.bereken(5, 5, 10));