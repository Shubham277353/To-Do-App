import {projects} from './logic';
import {activeProject} from './logic';
import { addTask } from "./logic";


const taskList = document.getElementById("task-list");


export default function renderTasks() {
    taskList.innerHTML = "";

    let tasks = projects[activeProject].tasks;

    tasks.forEach(task =>{
        const newtask = document.createElement("li");
        newtask.textContent = task.dueDate;
        taskList.appendChild(newtask);
    });
}
const addTaskBtn = document.getElementById("add-task");
addTaskBtn.addEventListener("click", ()=>{
    addTask("Learn Arrays","understand the basics of it","10/11/2026","High");
    renderTasks();
})
