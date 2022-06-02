
"use strict";

let assassinsSelect = document.getElementById("assassins");
let background = document.getElementById("bg");

background.src = 'images/altair.png';

assassinsSelect.addEventListener('input', () => {
    switch (assassinsSelect.value) {
        case 'altair':
            background.src = 'images/altair.png';
        break;
        case 'arno':
            background.src = 'images/arno.jpg';
        break;
        case 'edward':
            if(window.matchMedia("(min-width: 300px) and (max-width: 800px)").matches) {
                background.src = 'images/edward2.jpg';
            } else {
                background.src = 'images/edward.jpg';
            }
        break;
        case 'ezio':
            background.src = 'images/ezio.jpg';
        break;
        default:
            background.src = 'images/altair.png';
        break;
    }
})