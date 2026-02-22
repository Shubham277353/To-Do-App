const taskContainer = document.getElementById("task-list");

export default function taskEditDOM(){
    taskContainer.addEventListener("click", (e)=>{
        if(!e.target.matches("#task-edit-btn")) return;

        const taskId = e.target.dataset.taskId;
        editTask(taskId);
    })
}