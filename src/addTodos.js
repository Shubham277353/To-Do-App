import createTodo from "./createTodos";

const todoList = [];


export function addTodos(){

const todo1 = new createTodo('Buy milk', 'From store', '2025-10-12','High','check the expiry date',false);
todoList.push(todo1);
console.log(todoList);
}