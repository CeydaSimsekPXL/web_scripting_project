'use strict';

// ************************* functions *************************
// ------------------------- private -------------------------
// fetch
function _checkResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Response error: ${response.status}`);
    }
}

function _handleError(error, output) {
    if (output !== undefined) {
        output.appendChild(document.createTextNode(error.message));
        _errorOutput = undefined;
    } else {
        alert(error.message);
    }
}

// ------------------------- public -------------------------
function loadScript() {
    fillSelect();
    document.getElementById("button_search_friends").addEventListener("click", searchFriends);
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
    let select = document.getElementById("select_person");
    let personId = select.options[select.selectedIndex].value;
    let personName = select.options[select.selectedIndex].textContent;
    let friendsId, urlFilter;
    let friendsNames = [];

    output.innerHTML = "";
    fetch(_url + personId)
        .then((response) => {
            return _checkResponse(response);
        })
        .then((person) => {
            /*
            * opgave zegt: vriend van sofie is tim en geert --> false! geert is geen vriend van sofie
            * dus ik heb oefening.json aangepast: sofie --> "friends": [2, 3]
            * => logischer, mits het initieel al gaat om een array van vrienden
            *
            * volgens de normale opgave zou ik de vriend van sofie, en "de vriend van de vriend van sofie" moeten nemen
            * == onlogisch want sofie heeft maar 1 vriend waarvan id = 2 (= tim)
            * */

            friendsId = person.friends;

            if (friendsId.length !== 0) {
                if (friendsId.length > 1) {
                    urlFilter = `?id=${friendsId.join("&id=")}`;
                } else {
                    urlFilter = String(friendsId[0]);
                }

                return fetch(_url + urlFilter)
            }

            _errorOutput = output;
            throw new Error(`${personName} heeft geen vrienden`);
        })
        .then((response) => {
            return _checkResponse(response);
        })
        .then((personFriends) => {
            if (personFriends instanceof Array) {
                for (let row in personFriends) {
                    friendsNames.push(personFriends[row].name);
                }
            } else {
                friendsNames.push(personFriends.name);
            }

            output.appendChild(document.createTextNode(`${personName} heeft vriend(en) ${friendsNames.join(", ")}`));
        })
        .catch((error) => _handleError(error, _errorOutput));
}

// ************************* private members *************************
let _url = 'http://localhost:3000/persons/';
let _errorOutput;

// ************************* main *************************
window.addEventListener("load", loadScript);