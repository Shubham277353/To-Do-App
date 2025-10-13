import "./style.css";
import { todoList } from "./addTodos";

export default function display() {
  todoList.forEach((todo) => {

    const todoList = document.querySelector("#todo-list");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    
    const titleDescriptionDivd = document.createElement("div");
    const taskh3 = document.createElement("h3");
    taskh3.classList.add("task");
    taskh3.textContent = todo.title;

    const taskDescription = document.createElement("p");
    taskDescription.classList.add("task-description")
    taskDescription.textContent = todo.description;

    const dueDate = document.createElement("p");
    dueDate.classList.add("due-date");
    const date = new Date(todo.dueDate);
    dueDate.textContent = date.toDateString();

    if(todo.priority === "high"){
        taskDiv.classList.add("high");
    }else if (todo.priority === "medium"){
        taskDiv.classList.add("medium");
        taskDiv.style.backgroundColor = "lightblue";
    }else{
        taskDiv.classList.add("low");
        taskDiv.style.backgroundColor = "lightgreen";
    }

    titleDescriptionDivd.append(taskh3);
    titleDescriptionDivd.append(taskDescription);
    taskDiv.append(titleDescriptionDivd);
    taskDiv.append(dueDate);
    todoList.append(taskDiv);
  });
}
