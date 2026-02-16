import { taskCompleted } from "./logic";

const taskContainer = document.querySelector("#task-list");

export default function taskComplete(){
    taskContainer.addEventListener("click", (e) => {
        const clicked = e.target.closest("input");
        if(!clicked) return;

        const taskId = clicked.dataset.taskId;
        taskCompleted(taskId);
    })
}