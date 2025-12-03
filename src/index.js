import "./style.css";
import { fetchTaskDetails } from "./fetchTaskDetails";
import { display } from "./displayTodos";
import addNewProject from "./addNewProject";
import { displayProject } from "./displayProject";

fetchTaskDetails();
display();

addNewProject();
displayProject();