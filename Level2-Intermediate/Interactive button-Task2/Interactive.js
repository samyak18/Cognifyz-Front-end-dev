const changeColorButton = document.getElementById('changeColorButton');
const body = document.body;

const colors = ['color1', 'color2', 'color3','color4','color5','color6','color7'];

let colorIndex = 0;

changeColorButton.addEventListener('click', function() {
    body.classList.remove(...colors);
    body.classList.add(colors[colorIndex]);
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
});
