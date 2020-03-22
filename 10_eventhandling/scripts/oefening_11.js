'use strict';

// functions
function createElements() {
    // declaration and initialisation
    let form = document.getElementById("form");
    let select, option, paragraph;
    let fonts = ["Arial", "Times", "Courier", "Georgia", "Sans-Serif", "Serif", "Verdana"];
    let fontSizes = ["8pt", "10pt", "12pt", "16pt", "20pt", "24pt", "28pt"];

    // create elements
    select = document.createElement("select");
    select.id = "fontsSelect";
    for (let font of fonts) {
        option = document.createElement("option");
        option.value = font;
        option.text = font;
        select.appendChild(option);
    }

    form.appendChild(select);

    select = document.createElement("select");
    select.id = "fontSizesSelect";
    for (let fontSize of fontSizes) {
        option = document.createElement("option");
        option.value = fontSize;
        option.text = fontSize;
        select.appendChild(option);
    }

    select.style.marginLeft = "10px";
    form.appendChild(select);

    paragraph = document.createElement("p");
    paragraph.textContent = "Voorbeeld tekst om het lettertype te illustreren";
    paragraph.style.marginTop = "50px";
    form.appendChild(paragraph);
}

function addEvents() {
    let font = document.getElementById("fontsSelect");
    font.addEventListener("click", () => {
        let paragraph = document.querySelector("p");
        paragraph.style.fontFamily = font.value;
    });

    let fontSize = document.getElementById("fontSizesSelect");
    fontSize.addEventListener("click", () => {
        let paragraph = document.querySelector("p");
        paragraph.style.fontSize = fontSize.value;
    });
}

// main
createElements();
addEvents();