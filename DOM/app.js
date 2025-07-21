

let image = document.querySelector('img');
console.log(image);
image.getAttribute('href');


const myDiv = document.getElementById("container")

const myImage = document.querySelector("img");


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


const allSpan = document.querySelectorAll("span")

for (let i = 0; i < allSpan.length; i++) {

    allSpan.style.color = "colors[i]";
}


const li = document.querySelectorAll("li");


for (let index = 0; index < myLi.length; index++) {
    if (myLi[index].classList.contains('highlight')) { myLi[index].classList.remove('highlight') }
    else { myLi[index].classList.add('highlight') }
}

