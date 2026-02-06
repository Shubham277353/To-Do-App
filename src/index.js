import "./style.css";
import { addNewProject } from "./addProject";
import projectSwitchLogic from "./projectSwitchLogic";
import renderProjects from "./renderProjects";
import addTaskForm from "./addTasks";
import renderTasks from "./renderTasks";
import { addTask } from "./logic";

const data = { title: "Buy milk", description: "from the rajesh dairy", dueDate: "2026-02-07", priority: "low" }
const data2 = { title: "home ", description: "visit mummy ", dueDate: "2026-02-26", priority: "medium" }

addTask(data);
addTask(data2);
renderProjects();
renderTasks();
addTaskForm();
addNewProject();
projectSwitchLogic();

