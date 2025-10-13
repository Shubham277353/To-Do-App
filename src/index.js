import "./style.css";
import {addTodos} from "./addTodos";
import display from "./displayTodos";

addTodos('Practice javascript', 'from TOP', '2025-10-15','high',false);
addTodos('Practice javascript', 'from TOP', '2025-10-15','medium',false);   
addTodos('Buy milk', 'From store', '2025-10-12','low',false);

display();