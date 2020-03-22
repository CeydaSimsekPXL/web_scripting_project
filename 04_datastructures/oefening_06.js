// functions
function reverseArray(normalArray) {
    let arrayReverse = [];
    for (let i = normalArray.length - 1; i >= 0; i--) {
        arrayReverse = arrayReverse.concat(normalArray[i]);
    }

    return arrayReverse;
    //return normalArray.reverse();
}

// declaration
let a = [1, 2, 3];
let b = reverseArray(a);
console.log(b);