

let myLeads = [];

const saveButton = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
console.log(ulEl);


saveButton.addEventListener('click', function () {

    myLeads.push(inputEl.value);
    inputEl.value = ""
    renderLeads();

    
})

let count = 0;

function renderLeads() {
    for (let i = count; i< myLeads.length; i++) {

        const li = document.createElement("li")
        const a = document.createElement("a")
        a.href = myLeads[i];
        a.textContent = myLeads[i];
        a.target = "-blank"
        li.appendChild(a);
        ulEl.appendChild(li)
        count++;

    }
}

