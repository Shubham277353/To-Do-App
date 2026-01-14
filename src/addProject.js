import { addProject } from "./logic";

const addProjectBtn = document.querySelector("#project-add-btn");
const dialog = document.querySelector("#dialog");

addProjectBtn.addEventListener("click",()=>{
    dialog.showModal();
})




