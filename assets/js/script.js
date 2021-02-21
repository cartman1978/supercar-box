// Shoew/Hide table on mobile only
function tableMobile(id) {
    let e = document.getElementById(id);
    e.style.display =
        ((e.style.display != 'none') ? 'none' : 'block');
}


// Onmouseenter change table size and color
function bigTable(size) {
    size.style.color = '#000000';
    size.style.fontWeight = 'bold';
    size.style.backgroundColor = '#F4CA04';
    size.style.borderColor = '#000000';

}

// Onmouseenter change box-car bg
function changeBg() {
    let newBg = document.getElementById('carBox');
    newBg.style.backgroundImage = `url(assets/images/stainless.jpg)`;
    newBg.style.backgroundRepeat = 'no-repeat';
    newBg.style.backgroundSize = 'cover';
}