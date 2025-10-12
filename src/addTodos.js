import createTodo from "./createTodos";

const todoList = [];


export function addTodos(title, description, dueDate, priority, completed){
const todo = new createTodo(title, description, dueDate, priority, completed);
todoList.push(todo);
}

addTodos('Buy milk', 'From store', '2025-10-12','low',false);
addTodos('Practice javascript', 'from TOP', '2025-10-13','High',false);
console.log(todoList);