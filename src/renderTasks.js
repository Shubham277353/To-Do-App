import { gettasks } from "./logic";

const taskList = document.getElementById("task-list");

export default function renderTasks(){
    const tasks = gettasks();
    
    for(const task of tasks){
        const listItem = document.createElement("li");
        listItem.innerHTML = `<h2>${task.title}</h2> <p>${task.description}</p> <p>${task.dueDate}</p>`;

        taskList.append(listItem);
    }
}