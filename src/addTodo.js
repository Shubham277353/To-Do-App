export function addTodo(){
    const toDoContainer = document.querySelector("#to-do-container");
    const tasks = document.getElementById("input");
    const addBtn = document.getElementById("add-btn");
    let task ;
    addBtn.addEventListener("click",()=>{
        task = tasks.innerHTML;
        console.log(task);
    })
}