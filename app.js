// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }


const h1 = document.querySelector('h1');
const button = document.querySelector('button');
h1.style.textAlign = 'center';
button.style.display = 'block';
button.style.margin = '0px auto';

button.addEventListener('click', function () {

    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = function () {
    const r = Math.floor(Math.random() * 255);
    console.log(r);
    const g = Math.floor(Math.random() * 255);
    console.log(g);
    const b = Math.floor(Math.random() * 255);
    console.log(b);

    const sum = (r + g + b);

    console.log('sum of value :');

    console.log(sum);
    if (sum <= 150) {
        h1.style.color = 'white';
    }
    else {
        h1.style.color = 'black';
    }


    return `rgb(${r}, ${g}, ${b})`;
}