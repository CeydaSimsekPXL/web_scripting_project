'use strict';

function placeInputs() {
    // declaration and initialisation
    let section = document.getElementById("input_section");
    let input, label;
    let form = document.createElement("form");

    // place inputs
    for (let i = 0; i < 2; i++) {
        input = document.createElement("input");
        input.type = "number";
        input.style.width = "75px";
        form.appendChild(input);
    }

    // place 'X' between inputs
    label = document.createElement("label").appendChild(document.createTextNode(" X "));
    form.insertBefore(label, input);

    // place result box
    input = document.createElement("output");
    form.appendChild(input);

    // place form in section
    section.appendChild(form);
}

function addEvents() {
    let form = document.querySelector("form");
    form.addEventListener("oninput", () => {
        _calculateAndShow("input[type=number]", "output");
    });
}

function _calculateAndShow(inputBox, outputBox) {
    // declaration and initialisation
    let input, factors;
    let result = 1;

    // calculate
    factors = document.querySelectorAll(inputBox);

    for (let i = 0; i < factors.length; i++) {
        result *= Number(factors[i].value);
    }

    // show result
    input = document.querySelector(outputBox);
    input.appendChild(document.createTextNode(`\tProduct = ${result}`));
}

// main
placeInputs();
addEvents();