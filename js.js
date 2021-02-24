"use strict"

const subject = document.querySelector("#subject");
const priority = document.querySelector("#priority");
const dueDate = document.querySelector("#dueDate");
const percentCompleted = document.querySelector("#percentCompleted");
const addBtn = document.querySelector("#addButton");
const tableBody = document.querySelector("#tableBody");
const form = document.querySelector("#form");

addBtn.addEventListener("click", function (e){
    e.preventDefault();
    addToDo();}, false);

addBtn.addEventListener("click", function (e){
    e.preventDefault();
    form.reset();
}, false);

console.log("pries f-ja");

function addToDo(){
    if(subject.value === "" || priority.value ==="" || dueDate.value === "" || percentCompleted.value === ""){
        alert("You must enter values!")
    }
    else{
    console.log("f-os pradzia");
    const tbodyRow = document.createElement("tr");
    tableBody.appendChild(tbodyRow);

    const addCheck = document.createElement("td");
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    tbodyRow.appendChild(addCheck);
    addCheck.appendChild(check);

    check.addEventListener("click", crossingOut);
    function crossingOut(){
        console.log("checked")
        if(check.checked === true){
            addSubject.style.textDecoration="line-through";
            addSubject.style.opacity="0.5";
        }
       else if (check.checked === false){
            addSubject.style.textDecoration="none";
            addSubject.style.opacity="1";
        }
    }

    const addSubject = document.createElement("td");
    addSubject.innerHTML = '<p class="text-center">'+subject.value+'</p>';
    tbodyRow.appendChild(addSubject);

    const addPriority = document.createElement("td");
    let priorityColors = priority.value;
    if(priorityColors === "High")
        addPriority.innerHTML = '<p class="text-center border rounded-pill bg-danger w-75">'+priorityColors+'</p>';
    else if(priorityColors === "Normal")
        addPriority.innerHTML = '<p class="text-center border rounded-pill bg-warning w-75">'+priorityColors+'</p>';
    else if(priorityColors === "Low")
        addPriority.innerHTML = '<p class="text-center border rounded-pill bg-success w-75">'+priorityColors+'</p>';
    tbodyRow.appendChild(addPriority);

    const addDate = document.createElement("td");
    addDate.innerHTML = '<p class="text-center">'+dueDate.value+'</p>';
    tbodyRow.appendChild(addDate);

    const addPercent = document.createElement("td");
    let proc = percentCompleted.value;
    console.log(proc);
    if(isNaN(proc) && proc !==""){
        if(proc === "100 %")
            addPercent.innerHTML=proc+'<span class="progress">'+'<span class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></span></span>';
        else if(proc === "75 %")
            addPercent.innerHTML=proc+'<span class="progress">'+'<span class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></span></span>';
        else if(proc === "50 %")
            addPercent.innerHTML=proc+'<span class="progress">'+'<span class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></span></span>';
        else if(proc === "25 %")
            addPercent.innerHTML=proc+'<span class="progress">'+'<span class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></span></span>';
        else if(proc === "0 %")
            addPercent.innerHTML=proc+'<span class="progress">'+'<span class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></span></span>';
    }
    tbodyRow.appendChild(addPercent);

    const addDelete = document.createElement("td");
    addDelete.className="d-flex justify-content-center"
    addDelete.innerHTML = '<input id="deleteBtn" class="bg-info rounded-pill text-light" type="button" value="Delete">';
    tbodyRow.appendChild(addDelete);

    addDelete.addEventListener("click", function (e){
        e.preventDefault();
        deleteItem(e.target.parentNode.parentNode);
    },false);

    function deleteItem(row){
        console.log("f-ja delete");
        tableBody.removeChild(row);
    }
    console.log("funkcijos galas");
}}

