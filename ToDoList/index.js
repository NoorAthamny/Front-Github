const addBtn = document.getElementById("push");
const inputField = document.getElementById("taskInput");
const tasks = document.getElementById("tasks");

addBtn.addEventListener("click", function () {
  if (inputField.value.trim().length == 0) {
    alert("Please Enter a Task");
  } else {
    addTask(inputField.value);
    inputField.value = "";
  }
});

//adding function

function addTask(taskName) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskSpan = document.createElement("span");
  taskSpan.classList.add("taskname");
  taskSpan.innerText = taskName;

  taskSpan.addEventListener("click", function () {
    taskSpan.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  deleteBtn.addEventListener("click", function () {
    taskDiv.remove();
  });

  taskDiv.appendChild(taskSpan);
  taskDiv.appendChild(deleteBtn);

  tasks.appendChild(taskDiv);
}
