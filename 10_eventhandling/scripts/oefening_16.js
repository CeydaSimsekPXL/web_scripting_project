'use strict';

// functions
function addEvents() {
    let label;
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("dblclick", () => {
            images[i].setAttribute("style", "width: 200px");

            label = document.getElementById("bijschrift");
            label.textContent = images[i].alt;
        });

        images[i].addEventListener("click", () => {
            images[i].setAttribute("style", "");

            label = document.getElementById("bijschrift");
            label.textContent = "";
        });
    }
}

// main
document.body.style.backgroundColor = "purple";
addEvents();