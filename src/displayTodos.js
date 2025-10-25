import "./style.css";
import { getTodoLIst } from "./addTodos";

const todoArray = getTodoLIst();

console.log(todoArray.length, "todos in display()");
console.log(todoArray);


export function display() {
  const todoDiv = document.querySelector("#todo-list");
  todoDiv.innerHTML = "";
  todoArray.forEach((todo) => {

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");

    const titleDescriptionDivd = document.createElement("div");
    const taskh3 = document.createElement("h3");
    taskh3.classList.add("task");
    taskh3.textContent = todo.title;

    const taskDescription = document.createElement("p");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = todo.description;

    const dueDate = document.createElement("p");
    dueDate.classList.add("due-date");
    const date = new Date(todo.dueDate);
    dueDate.textContent = date.toDateString();

    taskDiv.classList.add("tasks");

    if (todo.priority === "high") {
      taskDiv.style.backgroundColor = "orangered";
    } else if (todo.priority === "medium") {
      taskDiv.style.backgroundColor = "lightblue";
    } else {
      taskDiv.style.backgroundColor = "lightgreen";
    }

    titleDescriptionDivd.append(taskh3);
    titleDescriptionDivd.append(taskDescription);
    taskDiv.append(titleDescriptionDivd);
    taskDiv.append(dueDate);
    todoDiv.append(taskDiv);
  });
}
