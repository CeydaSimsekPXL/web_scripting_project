'use strict';

// functions
function createElements() {
    // declaration and initialisation
    let form = document.getElementById("form");
    let label, input, button, div;

    // create elements
    label = document.createElement("label");
    label.textContent = "Geef een getal tussen 2 en 10:";

    input = document.createElement("input");
    input.id = "numberInput";
    input.type = "number";
    input.style.marginLeft = "5px";

    button = document.createElement("input");
    button.id = "drawButton";
    button.type = "button";
    button.value = "Teken pyramide";
    button.style.marginLeft = "5px";

    div = document.createElement("div");
    div.id = "drawDiv";

    // append elements
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(document.createElement("br"));
    form.appendChild(div);
}

function addEventListener() {
    let button = document.getElementById("drawButton");
    button.addEventListener("click", () => {
        let div = document.getElementById("drawDiv");
        let number = Number(document.getElementById("numberInput").value);

        try {
            div.innerHTML = "";
            if (number >= 2 && number <= 10) {
                for (let i = 1; i <= number; i++) {
                    for (let j = 0; j < i; j++) {
                        div.appendChild(document.createTextNode("* "));
                    }

                    div.appendChild(document.createElement("br"));
                }
            } else {
                throw new Error("Geef een getal in tussen 2 en 10");
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    });
}

// main
createElements();
addEventListener();