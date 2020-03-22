// declaration
let maxNumber = 100;

// print result
for (let i = 1; i <= maxNumber; i++) {
    let output = "";

    if (i % 3 === 0) {
        output += "Fizz";
    }
    if (i % 5 === 0) {
        output += "Buzz";
    }

    console.log(output || i);

    /*if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }*/
}