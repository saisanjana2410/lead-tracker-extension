let myLeads = []


const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        ulEl.innerHTML+= `
            <li>
                <a  target='_blank' href='${tabs[0].url}'> 
                    ${tabs[0].url}
                </a>
            </li> `
    })
})

function render(leads){
    let listItems=""
    for(let i=0 ; i< leads.length  ; i++){
        listItems += `
            <li>
                <a  target='_blank' href='${leads[i]}'> 
                    ${leads[i]}
                </a>
            </li> `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    ulEl.innerHTML+= `
        <li>
            <a  target='_blank' href='${inputEl.value}'> 
                ${inputEl.value}
            </a>
        </li> `
    inputEl.value=""
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear("myLeads")
    myLeads=[]
    render(myLeads)
})



