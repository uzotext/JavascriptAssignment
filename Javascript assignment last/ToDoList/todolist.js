const taskList = document.getElementById("listtask");
const errorMessage = document.getElementById("error-message");
const taskInput = document.getElementById("inputtask");
 const form = document.getElementById("formdv");
 
 const max_tasks = 10;

 
 form.addEventListener("submit", function(event) {
     event.preventDefault(); 

     
     const valueofTask = taskInput.value.trim();

     
     if (valueofTask === "") {
         errorMessage.textContent = "Please enter a task!";
         return;
     }

     if (taskList.children.length >= max_tasks) {
         errorMessage.textContent = `You are required to add ${max_tasks} tasks!`;
         return;
     }

     
     errorMessage.textContent = "";
     addTask(valueofTask);

     
     taskInput.value = "";
 });

 
 function addTask(task) {
    
     const li = document.createElement("li");

     
     const taskText = document.createElement("span");
     taskText.textContent = task;

     
     const checkbox = document.createElement("input");
     checkbox.type = "checkbox";
     checkbox.addEventListener("change", function() {
         taskText.classList.toggle("completed", this.checked);
     });

     
     const removeButton = document.createElement("button");
     removeButton.textContent = "Delete";
     removeButton.addEventListener("click", function() {
         taskList.removeChild(li);
     });

     
     li.appendChild(checkbox);
     li.appendChild(taskText);
     li.appendChild(removeButton);

     
     taskList.appendChild(li);
 }