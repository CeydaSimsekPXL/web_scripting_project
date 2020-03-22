'use strict';

// functions
function loadScripts() {
    fillSelect();
}

function fillSelect() {
    let select = document.getElementById("select_person");
    let persons = ["sofie", "tim", "geert"];
    let option;

    for (let i = 0; i < persons.length; i++) {
        option = document.createElement("option");
        option.value = String(i + 1);
        option.textContent = persons[i];
        select.appendChild(option);
    }
}

function searchFriends() {
    let output = document.getElementById("div_output");
    let option = document.getElementById("select_person").options.selectedIndex;
    let id = option.value;

    fetch(_url)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(String(response.status));
            }
        })
        .then((person) => getPersons(person))
        .then((friends) => getPersons(friends))
        .catch((error) => handleError(error));
}

function getPersons(persons) {
    
}

function handleError(error) {
    alert(`Response error: ${error}`);
}

// members
let _url = 'http://localhost:3000/persons';

// main
window.addEventListener("load", loadScripts);