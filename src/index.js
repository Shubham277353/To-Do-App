import "./style.css";
import CreateTodo from "./createTodos";
import {addTodos} from "./addTodos";
import display from "./displayTodos";

addTodos('Buy milk', 'From store', '2025-10-12','low',false);
addTodos('Practice javascript', 'from TOP', '2025-10-15','high',false);
addTodos('Practice javascript', 'from TOP', '2025-10-15','medium',false);

display();