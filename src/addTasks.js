import { addTask } from "./logic";

export default function addTaskForm(){
const addTaskBtn = document.querySelectorAll(".add-task");
const dialog = document.querySelector("#task-dlg");
const form = document.getElementById("add-new-task-form")

function btnHandle() {
  dialog.showModal();
}

addTaskBtn.forEach(button => {
    button.addEventListener("click",()=>btnHandle());
});

form.addEventListener("submit",()=>{
  // e.preventDefault();

  const formData = new FormData(form);
  const result = Object.fromEntries(formData);
  console.log(result.description);
  addTask(result);
})

}
