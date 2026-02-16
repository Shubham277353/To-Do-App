import { getTasks } from "./logic";

const taskList = document.getElementById("task-list");

export default function renderTasks(){
    const tasks = getTasks();

    taskList.innerHTML = "";
    
    for(const task of tasks){
        const listItem = document.createElement("li");

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

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


        listItem.append(checkBox,title,description,dueDate,deleteBtn);
        taskList.append(listItem);
    }
}