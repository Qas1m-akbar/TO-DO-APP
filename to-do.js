let listContainer = document.getElementById("list-container");
let inputBox = document.getElementById("input-box");

function addTask() {
  if (inputBox.value === "") {
    alert("Please Enter Task");
  } else {
    let task = document.createElement("li");
    task.textContent = inputBox.value;
    listContainer.appendChild(task);

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    task.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

// ADD KEYPRESS ENTER event whenever press enter it will add item to the list
inputBox.addEventListener('keyup',(event)=>{
  if(event.which === 13){
    addTask();
  }
});


// WORK when click on the BUTTON ADDTASK
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData(); 
  }
});

// DATA SAVE in the browser local storage and SAVE data even a page is refresh or reload  
function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML); 
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("tasks");
}
showData();
