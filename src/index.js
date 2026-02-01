import "./style.css";
import { addNewProject } from "./addProject";
import renderProjects from "./renderProjects";
import addTaskForm from "./addTasks";
import renderTasks from "./renderTasks";
import { addTask } from "./logic";
const data = { title: "Buy milk", description: "from the rajesh dairy", dueDate: "2026-02-07", priority: "low" }
addTask(data);
renderProjects();
renderTasks();
addTaskForm();
addNewProject();

