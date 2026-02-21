import { taskCompleted } from "./logic";

const taskContainer = document.querySelector("#tasks-wrapper");

export default function taskComplete(){
    taskContainer.addEventListener("click", (e) => {
        if (!e.target.matches('input[type="checkbox"]')) return;

        const taskId = e.target.dataset.taskId;
        taskCompleted(taskId);
    })
}