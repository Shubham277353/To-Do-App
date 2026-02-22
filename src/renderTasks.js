// import { parse } from "date-fns/fp";
import { getTasks } from "./logic";
import { parseISO, differenceInDays, format } from "date-fns";

const taskList = document.getElementById("task-list");
const completedTaskList = document.getElementById("completed-tasks-list");

export default function renderTasks() {
  const tasks = getTasks();

  taskList.innerHTML = "";
  completedTaskList.innerHTML = "";

  for (const task of tasks) {
    if (task.isDone === false) {
      console.log("Tasks is not done");

      const listItem = document.createElement("li");
      listItem.classList.add("list-item");

      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.checked = task.isDone;
      checkBox.dataset.taskId = task.id;

      const title = document.createElement("h2");
      title.textContent = task.title;

      const description = document.createElement("p");
      description.textContent = task.description;

      const dueDate = document.createElement("p");
      const due = parseISO(task.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const diff = differenceInDays(due, today);

      let relativeDate;
      if (diff > 1) {
        relativeDate = `${diff} days`;
      } else if (diff === 1) {
        relativeDate = "due tommorow";
      } else if (diff === 0) {
        relativeDate = "due today";
      } else {
        relativeDate = `overdue ${Math.abs(diff)} days`;
      }

      const formattedDate = format(due, "MMM dd, yyyy");

      dueDate.textContent = `Due ${formattedDate} (${relativeDate})`;

      listItem.dataset.taskId = task.id;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("task-delete-btn");
      deleteBtn.dataset.taskId = task.id;

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("task-edit-btn");
      editBtn.dataset.taskId = task.id;

      listItem.append(
        checkBox,
        title,
        description,
        dueDate,
        editBtn,
        deleteBtn,
      );
      taskList.append(listItem);
    } else {
      console.log("Task is done");

      const completedListItem = document.createElement("li");
      completedListItem.classList.add("completed-list-item");

      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.checked = task.isDone;
      checkBox.dataset.taskId = task.id;

      const title = document.createElement("h2");
      title.textContent = task.title;

      const description = document.createElement("p");
      description.textContent = task.description;

      const dueDate = document.createElement("p");
      const due = parseISO(task.dueDate);
      const formattedDate = format(due, "MMM dd, yyyy");
      dueDate.textContent = `Completed (${formattedDate})`;

      completedListItem.dataset.taskId = task.id;

      completedListItem.append(checkBox, title, description, dueDate);
      completedTaskList.append(completedListItem);
    }
  }
}
