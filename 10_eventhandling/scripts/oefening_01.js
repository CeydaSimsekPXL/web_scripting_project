'use strict';

// functions
function fillMountainsDiv() {
    // declaration and initialisation
    const MOUNTAINS = [
        {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
        {name: "Everest", height: 8848, place: "Nepal"},
        {name: "Mount Fuji", height: 3776, place: "Japan"},
        {name: "Vaalserberg", height: 323, place: "Netherlands"},
        {name: "Denali", height: 6168, place: "United States"},
        {name: "Popocatepetl", height: 5465, place: "Mexico"},
        {name: "Mont Blanc", height: 4808, place: "Italy/France"}
    ];
    let mountains = document.getElementById("mountains");
    let header = document.createElement("h1");
    let table = document.createElement("table");
    let tableRow, tableData;
    //let keys = Object.keys(MOUNTAINS);

    // header
    header.textContent = "Mountains";
    mountains.appendChild(header);

    // table
    //  table head
    tableRow = document.createElement("tr");

    for (let key in MOUNTAINS[0]) {
        tableData = document.createElement("th");
        tableData.textContent = key;
        tableRow.appendChild(tableData);
    }

    table.appendChild(tableRow);

    //  table data
    for (let i = 0; i < MOUNTAINS.length; i++) {
        tableRow = document.createElement("tr");

        for (let key in MOUNTAINS[i]) {
            tableData = document.createElement("td");
            tableData.textContent = MOUNTAINS[i][key];

            if (typeof MOUNTAINS[i][key] === "number") {
                tableData.style.textAlign = "right";
            }
            tableData.style.paddingRight = "20px";
            tableData.style.paddingLeft = "20px";

            tableRow.appendChild(tableData);
        }

        table.appendChild(tableRow);
    }

    // append table to div mountains
    mountains.appendChild(table);
}

// main
let title = document.getElementById("title");
title.textContent = "Mountains";

fillMountainsDiv();