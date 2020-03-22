'use strict';

// functions
function addEvents() {
    let cores = ["Core i3", "Core i5", "Core i7"];
    let imgs = document.querySelectorAll("img");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("mouseover", () => {
            let coreText = document.getElementById("processor");
            imgs[i].src = `images/${cores[i].toLowerCase().replace(" ", "_")}.jpg`;
            coreText.textContent = `Gekozen processor = ${cores[i]}`;
        });

        imgs[i].addEventListener("mouseout", () => {
            let coreText = document.getElementById("processor");
            imgs[i].src = `images/${cores[i].toLowerCase().replace(" ", "_")}_logo.gif`;
            coreText.textContent = "Gekozen processor =";
        });
    }
}

// main
addEvents();