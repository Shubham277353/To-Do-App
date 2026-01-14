
export const projects = [
    {
        name: "default" , tasks: []
    }
];

export let activeProject = 0;

 function addProject(name){
    projects.push({name,tasks:[]});
}

export function addTask(title,description,dueDate,priority){
    projects[activeProject].tasks.push({title,description,dueDate,priority});
}

 function switchProject(index){
    activeProject = index;
}


