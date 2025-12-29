import createTodo from "./createTodos";

 const todoList = [];

 export const getTodoLIst = () => {
    return todoList;
 }

 export const setTodoLIst = (todo) => {
    todoList.push(todo);
 }

 
 export function addTodos(title, description, dueDate, priority, completed){
     const todo = new createTodo(title, description, dueDate, priority, completed);
     setTodoLIst(todo);
    }
    
    addTodos('Practice javascript', 'from TOP', '2025-10-15','high',false);
    addTodos('Buy milk', 'From store', '2025-10-12','low',false);