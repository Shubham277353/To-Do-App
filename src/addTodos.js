import createTodo from "./createTodos";

 export const todoList = [];


export function addTodos(title, description, dueDate, priority, completed){
const todo = new createTodo(title, description, dueDate, priority, completed);
todoList.push(todo);
}
console.log(todoList);