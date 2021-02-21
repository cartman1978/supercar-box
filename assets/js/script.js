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
    newBg.style.backgroundImage = `url(assets/images/stainless.jpg)`;
    newBg.style.backgroundRepeat = 'no-repeat';
    newBg.style.backgroundSize = 'cover';
    document.body.style.backgroundColor = '#424242'
}

// Handle zoom event on img gallery hover

function zoomIn(event) {
    let element = document.getElementById('overlay');
    element.style.display = 'inline-block';
    let img = document.getElementById('imgZoom');
    let posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
    let posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
    element.style.backgroundPosition = (-posX * 5) + "px " + (-posY * 5) + "px";
}

function zoomOut() {
    let element = document.getElementById('overlay');
    element.style.display = "none";
}