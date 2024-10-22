const taskInput = document.getElementById('taskInput');  
const taskList = document.getElementById('taskList');  
if (taskInput.value) {  
const li = document.createElement('li');  
li.textContent = taskInput.value;  
li.addEventListener('click', function() {  
li.classList.toggle('completed');  
});  
taskList.appendChild(li);  
taskInput.value = '';  
}  
});
