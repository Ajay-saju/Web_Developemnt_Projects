const form = document.querySelector('form');

const product = document.querySelector("#product")
const quantity = document.querySelector("#qty")
const list = document.querySelector("#list")
const newLi = document.createElement('li')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const productVal = product.value;
    const qtyVal = quantity.value;

    newLi.textContent = productVal + " " + qtyVal;

    list.append(newLi);

    product.value = '';
    quantity.value = '';


})