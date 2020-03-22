// declaration
let bovengrens = 1, ondergrens = 100;
let som = 0;

// calculate sum
for (let i = ondergrens; i >= bovengrens; i--) {
    if (i % 3 === 0) {
        som += i;
    }
}

// print result
console.log(som);