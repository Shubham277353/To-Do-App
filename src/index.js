import "./style.css";
import display from "./displayTodos";
import { fetchTaskDetails } from "./fetchTaskDetails";
import {addTodos} from "./addTodos";

addTodos('Practice javascript', 'from TOP', '2025-10-15','high',false);
addTodos('Buy milk', 'From store', '2025-10-12','low',false);
display();
fetchTaskDetails();
