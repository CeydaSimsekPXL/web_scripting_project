'use strict';

// functions
function byTagName(node, tag) {
    let tags = [];
    let elements = node.querySelectorAll(tag);

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].nodeName.toLowerCase() === tag) {
            tags.push(elements[i]);
        }
    }

    return tags;
}

// main
console.log(byTagName(document.body, "span"));