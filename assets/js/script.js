// Shoew/Hide table on mobile only
function tableMobile(id) {
    let e = document.getElementById(id);
    e.style.display =
        ((e.style.display != 'none') ? 'none' : 'block');
}


// Onmouseenter change table size and color
function bigTable(changeBg) {
    changeBg.style.color = '#000000';
    changeBg.style.fontWeight = 'bold';
    changeBg.style.backgroundColor = '#F4CA04';
    changeBg.style.borderColor = '#000000';

}

// Onmouseenter change box-car bg
function changeBg() {
    let newBg = document.getElementById('carBox');
    newBg.style.backgroundImage = `url(assets/images/mouseenter-bg.jpg)`;
    newBg.style.backgroundRepeat = 'no-repeat';
    newBg.style.backgroundSize = 'cover';
    newBg.style.boxShadow = `3px -3px 5px 0px #CB2D11`;
    document.body.style.backgroundColor = '#F4CA04'
}

//Click the button to render car spec

let Buttons = document.querySelectorAll('.selectSection button');

for (let button of Buttons) {
    button.addEventListener('click', (e) => {
        const et = e.target;

        const active = document.querySelector('.active');
        //chack for active class on buttons and remove 
        if (active) {
            active.classList.remove('active');
        }
        //add active class to the clicked button
        et.classList.add('active');

        let allTableContent = document.querySelectorAll('.tableContent');

        for (let tableContent of allTableContent) {
            if (tableContent.getAttribute('data-number') === button.getAttribute('data-number')) {
                tableContent.style.display = 'block';
            } else {
                tableContent.style.display = 'none';
            }
        }
    });
}

//Text animation 

const text = 'Factory made production and assemby... ';
let index = 0;

function writeText() {
    document.getElementById('text-anim').innerHTML = text.slice(0, index);


    index++;

    if (index > text.length - 1) {
        index = 0;
    }
}

setInterval(writeText, 200);

// Popup container 

const open = document.getElementById('button-more');
const close = document.getElementById('close');
const container = document.getElementById('factory');

open.addEventListener('click', () => {
    container.classList.add('active');
});

close.addEventListener('click', () => {
    container.classList.remove('active');
});