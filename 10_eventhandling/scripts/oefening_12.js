'use strict';

// functions
function addEvents() {
    let buttons = document.querySelectorAll("input[type=button]");

    // styles
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            let link = document.getElementById("stylesheet");
            link.href = `style/opmaak${i + 1}.css`;
        });
    }
}

// main
addEvents();