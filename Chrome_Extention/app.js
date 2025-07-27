
// localStorage.clear();

let myLeads = [];  // place to save input leads from input fields 


let savedLeads = [];

const hasValue = localStorage.getItem("saveLeads");

if (hasValue !== null) {
    showSavedLeads()
    
}




function showSavedLeads() {
    const savedLeadsJson = localStorage.getItem("saveLeads");
    savedLeads = JSON.parse(savedLeadsJson);

    for (let i = 0; i < savedLeads.length; i++) {
        console.log(savedLeads[i] + " log from showSavedLeads ");
        myLeads.push(savedLeads[i]);
    }
    // renderLeads()

}


const saveButton = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")



saveButton.addEventListener('click', function () {

    console.log("click working ")

    myLeads.push(inputEl.value);
    inputEl.value = ""
    renderLeads();
    saveMyLeads();


})


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
        console.log("renderLeads working ")

    }

}

// save all leads to local 


function saveMyLeads() {

    const uniqueLeads = [...new Set(myLeads)];
    const stringifyLeads = JSON.stringify(uniqueLeads);
    localStorage.setItem("saveLeads", stringifyLeads);


    console.log(localStorage.getItem("saveLeads" + " from saveMyLeads "))





}




