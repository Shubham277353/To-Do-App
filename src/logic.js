const projects = [
    {
        name: "default" , tasks: []
    }
];

let activeProject = 0;

 function addProject(name){
    projects.push({name,tasks:[]});
}

 function addTask(title,description,dueDate,priority){
    projects[activeProject].tasks.push({title,description,dueDate,priority});
}

 function switchProject(index){
    activeProject = index;
}

addTask("Learn Arrays","understand the basics of it","10/11/2026","High");
addProject("Work");
switchProject(1);
addTask("Cook");
console.log(projects[0].tasks,projects[1].tasks);
