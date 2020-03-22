// declaration
let grootte = 8;
let schakel = 1;
let result;

// print result
for (let i = 0; i < grootte; i++) {
    result = "";

    for (let j = 0; j < grootte; j++) {
        if (schakel === 1) {
            result += "#";
        } else {
            result += " ";
        }

        schakel = (schakel + 1) % 2;
    }

    console.log(result);
    schakel = (schakel + 1) % 2;
}