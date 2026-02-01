import { gettasks } from "./logic";

const taskList = document.getElementById("task-list");

export default function renderTasks(){
    const tasks = gettasks();

    taskList.innerHTML = "";
    
    for(const task of tasks){
        const listItem = document.createElement("li");

        const title = document.createElement("h2");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        const dueDate = document.createElement("p");
        dueDate.textContent = task.dueDate;

        listItem.append(title,description,dueDate);
        taskList.append(listItem);
    }
}