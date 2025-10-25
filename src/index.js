import "./style.css";
import { fetchTaskDetails } from "./fetchTaskDetails";
import { display } from "./displayTodos";
import addNewProject from "./addNewProject";

fetchTaskDetails();
display();

addNewProject();
