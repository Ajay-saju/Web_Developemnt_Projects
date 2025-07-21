


function changeColor() {


    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);


    return `rgb(${r},${g},${b})`;

}

const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', () => {



    const newColor = changeColor();
    console.log(newColor);

    const myColors = newColor.replace('rgb(', '').replace(')', '').split(',');

    const R = parseInt(myColors[0]);
    const G = parseInt(myColors[1]);
    const B = parseInt(myColors[2]);

    if (R + G + B < 150) {
        h1.style.color = 'rgb(225,255,255)';
    } else {
        h1.style.color = 'rgba(34, 38, 38, 1)';
    }


    document.body.style.backgroundColor = newColor;
    h1.textContent = newColor





}) 
