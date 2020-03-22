'use strict';

// functions
function addEventListener() {
    let button = document.querySelector("input[type=button]");
    button.addEventListener("click", () => {
        // declaration and initialisation
        let input, names = [];
        let ids = ["voornaamInput", "achternaamInput"];

        // get names
        try {
            for (let i = 0; i < ids.length; i++) {
                input = document.getElementById(ids[i]);

                if (input.value !== "") {
                    names.push(input.value);
                } else {
                    throw new Error("Vul alle velden in, a.u.b");
                }
            }

            // generate notification
            input = document.getElementById("notificationInput");
            input.value = `Welkom, ${names[0]} ${names[1]}`;
        } catch (error) {
            input = document.getElementById("notificationInput");
            input.value = error.message;
        }
    });
}

function createInputBoxes() {
    // declaration and initialisation
    let form = document.getElementById("form");
    let label, input, button;
    let labelContents = ["Voornaam", "Achternaam"];

    // create elements
    for (let i = 0; i < labelContents.length; i++) {
        label = document.createElement("label");
        label.textContent = labelContents[i];
        label.style.display = "inline-block";
        label.style.width = "125px";
        label.style.marginBottom = "5px";

        input = document.createElement("input");
        input.id = labelContents[i].toLowerCase() + "Input";
        input.type = "text";
        input.style.width = "100px";
        input.style.marginLeft = "20px";
        input.style.marginBottom = "5px";

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
    }

    button = document.createElement("input");
    button.type = "button";
    button.value = "Genereer melding";
    button.style.width = "125px";

    input = document.createElement("input");
    input.id = "notificationInput";
    input.type = "text";
    input.style.width = "250px";
    input.style.marginLeft = "20px";

    form.appendChild(button);
    form.appendChild(input);
}

// main
createInputBoxes();
addEventListener();