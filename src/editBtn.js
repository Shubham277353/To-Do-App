import { editForm, getTasks } from "./logic";

const taskContainer = document.getElementById("task-list");
const dialog = document.getElementById("task-edit-dlg");
const cancelBtn = document.getElementById("edit-cancel-btn");
const titleInput = document.getElementById("edit-title-input");
const descInput = document.getElementById("edit-desc-input");
const dueDateInput = document.getElementById("edit-due-date-input");
const form = document.getElementById("edit-task-form");
let taskId ;

export default function taskEditDOM() {
    taskContainer.addEventListener("click", (e) => {
        const tasks = getTasks();
        if (!e.target.matches(".task-edit-btn")) return;
        console.log("edit btn clicked");
        taskId = e.target.dataset.taskId;
        dialog.showModal();

        const selectedtask = tasks.find((task) => task.id === taskId);
        titleInput.value = selectedtask.title;
        descInput.value = selectedtask.description;
        dueDateInput.value = selectedtask.dueDate;
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        editForm(taskId, data);

        dialog.close();
        form.reset();
    });
}
