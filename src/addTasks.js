import { addTask } from "./logic";
import renderTasks from "./renderTasks";

export default function addTaskForm(){
const addTaskBtn = document.querySelectorAll(".add-task");
const dialog = document.querySelector("#task-dlg");
const form = document.getElementById("add-new-task-form");
const cancelBtn = document.getElementById("task-cancel-btn")

addTaskBtn.forEach(button => {
    button.addEventListener("click",()=>dialog.showModal());
});

cancelBtn.addEventListener("click",()=> dialog.close())

form.addEventListener("submit",()=>{
  // e.preventDefault();

  const formData = new FormData(form);
  const result = Object.fromEntries(formData);
  console.log(result.title);
  addTask(result);
  renderTasks();
})

}
