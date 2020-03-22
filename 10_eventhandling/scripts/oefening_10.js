'use strict';

// functions
function createElements() {
    // declaration and initialisation
    let form = document.getElementById("form");
    let label, input, button;

    // create elements
    label = document.createElement("label");
    label.textContent = "Geef een dag in";
    label.style.display = "inline-block";
    label.style.width = "110px";
    label.style.marginBottom = "5px";
    form.appendChild(label);

    input = document.createElement("input");
    input.id = "dayInput";
    input.type = "text";
    input.style.marginLeft = "5px";
    input.style.marginBottom = "5px";
    form.appendChild(input);
    form.appendChild(document.createElement("br"));

    button = document.createElement("input");
    button.id = "generateButton";
    button.type = "button";
    button.value = "Genereer tekst";
    button.style.width = "110px";
    form.appendChild(button);

    input = document.createElement("input");
    input.id = "textInput";
    input.type = "text";
    input.style.width = "250px";
    input.style.marginLeft = "5px";
    form.appendChild(input);
}

function addEvents() {
    let button = document.getElementById("generateButton");
    button.addEventListener("click", () => {
        let dayInput = document.getElementById("dayInput");
        let textInput = document.getElementById("textInput");
        let text;

        switch (dayInput.value.toLowerCase()) {
            case "maandag":
                text = "eerste";
                break;
            case "dinsdag":
                text = "tweede";
                break;
            case "woensdag":
                text = "derde";
                break;
            case "donderdag":
                text = "vierde";
                break;
            case "vrijdag":
                text = "vijfde";
                break;
            case "zaterdag":
                text = "zesde";
                break;
            case "zondag":
                text = "zevende";
                break;
            default:
                text = "niet-bestaande";
                break;
        }

        textInput.value = `is de ${text} dag van de week`;
    });
}

// main
createElements();
addEvents();