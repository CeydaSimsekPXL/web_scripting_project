'use strict';

// ------------------------- functions -------------------------
// --------------- private ---------------
// fetch
function _fetchGet(filter) {
    fetch(`${_url}/${filter}`)
        .then((response) => _checkResponse(response))
        .then((performances) => _show(performances))
        .catch((error) => _exceptionHandling(error));
}

function _checkResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Response error: ${response.status}`);
    }
}

function _exceptionHandling(error) {
    alert(error.message);
}

// data handling
function _show(data) {
    let table = document.createElement("table");
    let tr, td;

    _output.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        tr = document.createElement("tr");
        for (let key in data[i]) {
            td = document.createElement("td");
            td.textContent = data[i][key];
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    _output.appendChild(table);
}

// --------------- public ---------------
function handleLoad() {
    _output = document.getElementById("output");
    document.getElementById("get_all_button").addEventListener("click", getAll);
    document.getElementById("get_by_date_button").addEventListener("click", getByDate);
    document.getElementById("get_by_id_button").addEventListener("click", getById);
    document.getElementById("post_button").addEventListener("click", post);
}

// fetch
function getAll() {
    _fetchGet("");
}

function getByDate() {
    let date = document.getElementById("get_by_date_input").value;
    _fetchGet(`?play_date=${date}`);
}

function getById() {
    let id = document.getElementById("get_by_id_input").value;
    _fetchGet(`?id=${id}`);
}

function post() {
    let name = document.getElementById("post_name_input").value;
    let date = document.getElementById("post_date_input").value;
    let description = document.getElementById("post_description_input").value;
    let performance = {name, play_date: date, description};

    fetch(_url, {
        method: "POST",
        body: JSON.stringify(performance),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
        .then(performance => _fetchGet(`?id=${performance.id}`))
        .catch((error) => _exceptionHandling(error));
}

// ------------------------- declaration -------------------------
const _url = 'http://localhost:3000/performances';
let _output;

// ------------------------- main -------------------------
window.addEventListener("load", handleLoad);