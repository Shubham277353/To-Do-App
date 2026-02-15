import { deleteTasks } from "./logic";

const taskContainer = document.querySelector("#task-list");

export default function deleteTask() {
  taskContainer.addEventListener("click", (e) => {
    if (!e.target.matches(".delete-btn")) return;

    const li = e.target.closest("li");
    if (!li) return;
    
    const taskId = li.dataset.taskId;
    deleteTasks(taskId);
  });
}
