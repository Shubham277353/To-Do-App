import "./style.css";
import renderTasks from "./addTasks";
import { addTask } from "./logic";

const addTaskBtn = document.getElementById("add-task");
addTaskBtn.addEventListener("click", ()=>{
    addTask("Learn Arrays","understand the basics of it","10/11/2026","High");
    renderTasks();
})
