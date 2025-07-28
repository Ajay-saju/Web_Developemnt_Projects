
// localStorage.clear();

let myLeads = [];
let count = 0;

const saveButton = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const saveTabBtn = document.querySelector("#saveTab-btn")


if (localStorage.getItem("saveLeads")) {
    showSavedLeads()
}



saveTabBtn.addEventListener("click", function () {


    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.getItem("myleads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    });


})

function showSavedLeads() {

    const savedLeadsJson = localStorage.getItem("saveLeads");
    myLeads = JSON.parse(savedLeadsJson);
    renderLeads(myLeads)

}


saveButton.addEventListener('click', function () {



    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("saveLeads", JSON.stringify(myLeads))
    renderLeads(myLeads);


})

deleteBtn.addEventListener("dblclick", function () {

    console.log("delete btn working ")

    localStorage.clear()
    myLeads = []


    renderLeads(myLeads)

})


function renderLeads(leads) {
    ulEl.innerHTML = "";
    for (let i = 0; i < leads.length; i++) {

        const li = document.createElement("li")
        const a = document.createElement("a")
        a.href = leads[i];
        a.textContent = leads[i];
        a.target = "_blank"
        li.appendChild(a);
        ulEl.appendChild(li)
        count++;
    }

}






