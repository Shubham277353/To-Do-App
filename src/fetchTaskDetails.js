import { addTodos } from "./addTodos";
import {display} from "./displayTodos";

const addTaskBtn = document.getElementById("add-task-btn");
const dialogBox = document.getElementById("myDialog");

export function fetchTaskDetails(){

    addTaskBtn.addEventListener("click", () =>{
        const task = document.getElementById("task-field").value;
        const description = document.getElementById("description-field").value;
        const date = document.getElementById("date-field").value;
        const priority = document.getElementById("priority-list").value;
    
        // console.log(task,description,date,priority);

        addTodos(task,description,date,priority,false);
        display();

        dialogBox.close();
    
    })
}