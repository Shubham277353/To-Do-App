import "./style.css";
import { addTask } from "./logic";
import renderTasks from "./addTasks";

const addTaskBtn = document.getElementById("add-task");
addTaskBtn.addEventListener("click", ()=>{
    addTask("Learn Arrays","understand the basics of it","10/11/2026","High");
    renderTasks();
})
