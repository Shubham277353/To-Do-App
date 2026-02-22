const taskContainer = document.getElementById("task-list");
const dialog = document.getElementById("task-edit-dlg");
const cancelBtn = document.getElementById("cancel-btn");

export default function taskEditDOM(){
    taskContainer.addEventListener("click", (e)=>{
        if(!e.target.matches("#task-edit-btn")) return;

        const taskId = e.target.dataset.taskId;
        dialog.showModal();
        cancelBtn.addEventListener("click", () => dialog.closest());
        
    })
}