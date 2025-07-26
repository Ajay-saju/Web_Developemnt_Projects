
localStorage.clear();

let myLeads = [];  // place to save input leads from input fields 


let leadsToSave = []; 


const saveButton = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")



saveButton.addEventListener('click', function () {

    myLeads.push(inputEl.value);
    inputEl.value = ""
    renderLeads();


})

storeInLocal();


function storeInLocal() {

    myLeads.forEach(item => {

        leadsToSave.push(item);

    })
    let jasonLeads = JSON.stringify(myLeads);
    localStorage.setItem("prevLeads", jasonLeads);

}



if (localStorage.length > 0) {
    showPrevLeads()
    // localStorage.clear();
}


function showPrevLeads() {
    const prevLeads = localStorage.getItem("prevLeads");

    for (let lead in prevLeads) {
        console.log(lead);
    }
}


let count = 0;

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



