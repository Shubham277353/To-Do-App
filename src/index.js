import "./style.css";
import { addNewProject } from "./addProject";
import projectSwitchLogic from "./projectSwitchLogic";
import renderProjects from "./renderProjects";
import addTaskForm from "./addTasks";
import renderTasks from "./renderTasks";
import { addTask } from "./logic";
import deleteTask from "./deleteTask";
import taskComplete from "./taskComplete";

const data = { title: "Buy milk", description: "from the rajesh dairy", dueDate: "2026-02-07", priority: "low",id: crypto.randomUUID()}
const data2 = { title: "home ", description: "visit mummy ", dueDate: "2026-02-26", priority: "medium", id: crypto.randomUUID()}

addTask(data);
addTask(data2);
renderProjects();
renderTasks();
addTaskForm();
addNewProject();
projectSwitchLogic();
deleteTask();
taskComplete();
