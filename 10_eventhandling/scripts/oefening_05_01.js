'use strict';

function placeInputs() {
    // declaration and initialisation
    let section = document.getElementById("input_section");
    let input, label;

    // place inputs
    for (let i = 0; i < 2; i++) {
        input = document.createElement("input");
        input.type = "number";
        input.style.width = "75px";
        section.appendChild(input);
    }

    // place 'X' between inputs
    label = document.createElement("label").appendChild(document.createTextNode(" X "));
    section.insertBefore(label, input);

    // place button
    input = document.createElement("input");
    input.type = "button";
    input.value = "bereken";
    input.style.marginLeft = "10px";
    section.appendChild(input);

    // place result box
    input = document.createElement("input");
    input.type = "text";
    input.style.width = "250px";
    input.style.marginTop = "10px";
    section.appendChild(document.createElement("br"));
    section.appendChild(input);
}

function addEvents() {
    let button = document.querySelector("input[type=button]");
    button.addEventListener("click", event => {
        _calculateAndShow("input[type=number]", "input[type=text]");
    });
}

function _calculateAndShow(inputBox, outputBox) {
    // declaration and initialisation
    let input, factors;
    let result = 1;
    let numbers = [];

    // calculate
    factors = document.querySelectorAll(inputBox);

    for (let i = 0; i < factors.length; i++) {
        numbers.push(factors[i].value);
        result *= Number(factors[i].value);
    }

    // show result
    input = document.querySelectorAll(outputBox);
    input[0].value = `Het product van ${numbers[0]} en ${numbers[1]} is ${result}`;
}

// main
placeInputs();
addEvents();