export const projects = [
    {
        name: "default" , tasks: []
    }
];

export let activeProject = 0;

console.log(projects);

export function addProject(name){
    projects.push({name,tasks:[]});
    console.log(projects);
}

export function addTask(title,description,dueDate,priority){
    projects[activeProject].tasks.push({title,description,dueDate,priority});
}

 function switchProject(index){
    activeProject = index;
}


