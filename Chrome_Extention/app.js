
// localStorage.clear();

let myLeads = [];  // place to save input leads from input fields 


let savedLeads = [];

let count = 0;

const saveButton = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")


if (localStorage.getItem("saveLeads")) {
    showSavedLeads() 
}

function showSavedLeads() {
    console.log("show saved leads working")
    const savedLeadsJson = localStorage.getItem("saveLeads");
    savedLeads = JSON.parse(savedLeadsJson);

    myLeads = savedLeads
    renderLeads()

}


function renderLeads() {

    for (let i = count; i < myLeads.length; i++) {

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


saveButton.addEventListener('click', function () {



    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("saveLeads", JSON.stringify(myLeads))
    renderLeads();


})




