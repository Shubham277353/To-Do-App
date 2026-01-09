import {projects} from './logic';
import {activeProject} from './logic';

const taskList = document.getElementById("task-list");


export default function renderTasks() {
    taskList.innerHTML = "";

    let tasks = projects[activeProject].tasks;

    tasks.forEach(task =>{
        const newtask = document.createElement("li");
        newtask.textContent = task.description;
        taskList.appendChild(newtask);
    });
}

