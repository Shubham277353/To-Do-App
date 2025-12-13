import { addTodos } from "./addTodos";
import { display } from "./displayTodos";

const addTaskBtn = document.getElementById("add-task-btn");
const dialogBox = document.getElementById("myDialog");

export function fetchTaskDetails() {
  const dlg = document.getElementById("myDialog");
  const addBtn = document.querySelector("#add-task");
  addBtn.addEventListener("click", () => {
    dlg.showModal();
    dlg.style.display = "flex";
  });

  document
    .getElementById("cancel-btn")
    .addEventListener("click", () => dlg.close());

  addTaskBtn.addEventListener("click", () => {
    const task = document.getElementById("task-field").value;
    const description = document.getElementById("description-field").value;
    const date = document.getElementById("date-field").value;
    const priority = document.getElementById("priority-list").value;

    addTodos(task, description, date, priority, false);
    display();

    dialogBox.close();
    dlg.style.display = "none";
  });
}
