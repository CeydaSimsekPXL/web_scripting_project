'use strict';

// functions
function createElements() {
    // declaration and initialisation
    let form = document.getElementById("form");
    let label, input, button;
    let labelContents = ["Geef een geldige e-mailadres in", "naam", "naam2", "subdomein", "domein"];

    // create elements
    for (let content of labelContents) {
        label = document.createElement("label");
        label.textContent = content;
        label.style.display = "inline-block";
        label.style.width = "220px";
        label.style.marginBottom = "5px";

        input = document.createElement("input");
        input.type = "text";
        input.style.width = "250px";
        input.style.marginBottom = "5px";

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
    }

    button = document.createElement("input");
    button.type = "button";
    button.value = "Splits op";
    form.appendChild(button);
}

function addEvent() {
    let button = document.querySelector("input[type=button]");
    button.addEventListener("click", () => {
        let mailParts = document.querySelector("input[type=text]").value.split(new RegExp("[\.@]"));
        let inputBoxes = document.querySelectorAll("input[type=text]");

        for (let i = 1; i <= mailParts.length; i++) {
            inputBoxes[i].value = mailParts[i - 1];
        }
    });
}

// main
createElements();
addEvent();