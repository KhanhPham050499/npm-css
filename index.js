function changeBackground(color) {
    let div = document.getElementsByClassName('divColor')[0];

    if (color === 'red') {
        div.style.color = 'red';
    }
    if (color === 'blue') {
        div.style.color = 'blue';
    }
}

module.exports.colorJs = changeBackground;
