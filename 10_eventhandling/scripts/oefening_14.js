'use strict';

// functions
function createElements() {
    // declaration and initialisation
    let form = document.getElementById("form");
    let title, label, input, button;
    let labelContents = ["Voornaam", "Achternaam", "Adres"];

    // create elements
    form.style.width = "264px";
    title = document.createElement("h3");
    title.textContent = "Persoonlijke gegevens";
    title.style.textAlign = "center";
    form.appendChild(title);

    for (let i = 0; i < labelContents.length; i++) {
        label = document.createElement("label");
        label.textContent = labelContents[i];
        label.style.display = "inline-block";
        label.style.width = "100px";
        label.style.marginRight = "10px";
        label.style.marginBottom = "10px";

        input = document.createElement("input");
        input.type = "text";
        input.placeholder = labelContents[i].toLowerCase();

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
    }

    button = document.createElement("input");
    button.type = "button";
    button.value = "Verzenden";
    form.appendChild(button);

    button = document.createElement("input");
    button.type = "reset";
    button.value = "Wissen";
    button.style.marginLeft = "30px";
    form.appendChild(button);
    form.appendChild(document.createElement("br"));

    // uitbreiding
    button = document.createElement("input");
    button.id = "editingButton";
    button.type = "button";
    button.value = "Aan het wijzigen";
    form.appendChild(button);
}

function addEvents() {
    let input, button;
    input = document.querySelectorAll("input[type=text]");
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("focus", () => {
            input[i].setAttribute("style", "color: red");
        });

        input[i].addEventListener("blur", () => {
            input[i].setAttribute("style", "color: black; background-color: lightgray");
        });
    }

    button = document.querySelector("input[type=button]");
    button.addEventListener("click", () => {
        alert("Bedankt om het formulier te verzenden");
    });

    button = document.querySelector("input[type=reset]");
    button.addEventListener("click", () => {
        input = document.querySelectorAll("input[type=text]");
        for (let i = 0; i < input.length; i++) {
            input[i].setAttribute("style", "");
        }

        alert("Alle gegevens zijn gewist");
    });

    document.body.addEventListener("keydown", () => {
        button = document.getElementById("editingButton");
        button.setAttribute("style", "color: white; background-color: gray");
    });

    document.body.addEventListener("keyup", () => {
        button = document.getElementById("editingButton");
        button.setAttribute("style", "");
    });
}

// main
createElements();
addEvents();