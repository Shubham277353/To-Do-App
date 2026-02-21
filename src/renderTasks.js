import { getTasks } from "./logic";

const taskList = document.getElementById("task-list");
const completedTaskList = document.getElementById("completed-tasks-list");

export default function renderTasks() {
  const tasks = getTasks();

  taskList.innerHTML = "";
  completedTaskList.innerHTML = "";

  for (const task of tasks) {
    if (task.isDone === false) {
      console.log("Tasks is not done");

      const listItem = document.createElement("li");
      listItem.classList.add("list-item");

      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.checked = task.isDone;
      checkBox.dataset.taskId = task.id;

      const title = document.createElement("h2");
      title.textContent = task.title;

      const description = document.createElement("p");
      description.textContent = task.description;

      const dueDate = document.createElement("p");
      dueDate.textContent = task.dueDate;

      listItem.dataset.taskId = task.id;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("task-delete-btn");
      deleteBtn.dataset.taskId = task.id;

      listItem.append(checkBox, title, description, dueDate, deleteBtn);
      taskList.append(listItem);
    }
    else {
              console.log("Task is done");

      const completedListItem = document.createElement("li");
      completedListItem.classList.add("completed-list-item");

      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.checked = task.isDone ;
      checkBox.dataset.taskId = task.id;

      const title = document.createElement("h2");
      title.textContent = task.title;

      const description = document.createElement("p");
      description.textContent = task.description;

      const dueDate = document.createElement("p");
      dueDate.textContent = task.dueDate;

      completedListItem.dataset.taskId = task.id;

      completedListItem.append(checkBox, title, description, dueDate);
      completedTaskList.append(completedListItem);
    }
  }
}
