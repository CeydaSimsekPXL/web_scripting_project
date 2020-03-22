'use strict';

// functions
function createFormElements() {
    // declaration and initialisation
    let form = document.getElementById("form");
    let label, input, button;

    // create elements
    label = document.createElement("label");
    label.textContent = "Geef een getal tussen 0 en 50";
    label.style.marginBottom = "10px";
    form.appendChild(label);

    input = document.createElement("input");
    input.id = "numberInput";
    input.type = "number";
    input.style.marginLeft = "20px";
    input.style.marginBottom = "10px";
    input.style.width = "300px";
    form.appendChild(input);
    form.appendChild(document.createElement("br"));

    button = document.createElement("input");
    button.type = "button";
    button.value = "Genereer oneven getallen";
    button.style.width = "187px";
    form.appendChild(button);

    input = document.createElement("input");
    input.id = "resultInput";
    input.type = "text";
    input.style.marginLeft = "20px";
    input.style.width = "500px";
    form.appendChild(input);
}

function addEventListener() {
    let button = document.querySelector("input[type=button]");
    button.addEventListener("click", () => {
        // declaration and initialisation
        let numberInput = document.getElementById("numberInput");
        let resultInput = document.getElementById("resultInput");
        let number = 1, numberStop = Number(numberInput.value);

        // calculate result
        try {
            resultInput.value = "";

            if (numberStop >= 0 && numberStop <= 50) {
                while (number <= numberStop) {
                    resultInput.value += String(number) + " ";
                    number += 2;
                }
            } else {
                throw new Error("Ingegeven waarde moet liggen tussen 0 en 50");
            }
        } catch (error) {
            alert(error.message);
            numberInput.value = "";
        }
    });
}

// main
createFormElements();
addEventListener();