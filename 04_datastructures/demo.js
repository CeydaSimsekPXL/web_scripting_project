let listOfNumbers = [2, 3, 5, 7, 11];
let emptyArray = [];

console.log(listOfNumbers[4]);
console.log(listOfNumbers.length);
console.log(listOfNumbers["length"]);
console.log();
listOfNumbers[5] = 8;
console.log(listOfNumbers[5]);
console.log(listOfNumbers.length);
console.log();
listOfNumbers[20] = 10;
console.log(listOfNumbers[20]);
console.log(listOfNumbers[15]);
console.log(listOfNumbers.length);
console.log();
for (let number of listOfNumbers) {
    console.log(number);
}
console.log();
let n = listOfNumbers;
console.log(n);
listOfNumbers.pop();
console.log(n);