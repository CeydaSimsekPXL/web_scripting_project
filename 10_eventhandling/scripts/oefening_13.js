'use strict';

// functions
function createElements() {
    // declaration and initialisation
    let form = document.getElementById("form");
    let title, label, input, button, div;
    let labelContents = ["Phrase:", "Filter:"];
    let inputIds = ["phraseInput", "filterInput"];

    // create elements
    title = document.createElement("h1");
    title.textContent = "Sentence Reverser!";
    form.appendChild(title);

    for (let i = 0; i < labelContents.length; i++) {
        label = document.createElement("label");
        label.textContent = labelContents[i];

        input = document.createElement("input");
        input.id = inputIds[i];
        input.type = "text";
        input.style.width = "250px";
        input.style.marginLeft = "15px";

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
    }

    button = document.createElement("input");
    button.id = "goButton";
    button.type = "button";
    button.value = "Go!";
    form.appendChild(button);

    div = document.createElement("div");
    div.id = "filterDiv";
    div.style.margin = "15px auto";
    form.appendChild(div);

    label = document.createElement("label");
    label.id = "filterLabel";
    form.appendChild(label);
}

function addEvents() {
    let button = document.getElementById("goButton");
    button.addEventListener("click", () => {
        // declaration and initialisation
        let div = document.getElementById("filterDiv");
        let phraseInput = document.getElementById("phraseInput").value.split(" ");
        let filterInput = document.getElementById("filterInput");
        let filterLabel = document.getElementById("filterLabel");
        let label, counter = 0;

        // filter
        div.innerHTML = "";
        for (let i = phraseInput.length - 1; i >= 0; i--) {
            if (!phraseInput[i].includes(filterInput.value) || filterInput.value === "") {
                label = _createWordLabels(phraseInput[i]);
                div.appendChild(label);
            } else {
                counter++;
            }
        }

        filterLabel.textContent = `${counter} word(s) filtered`;
    });
}

function _createWordLabels(content) {
    let label = document.createElement("label");
    label.textContent = content;
    label.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    label.style.border = "dashed 2px red";
    label.style.marginLeft = "10px";

    return label;
}

// main
createElements();
addEvents();