 const projects = [
    {
        name: "default" , tasks: []
    }
];

 let activeProject = 0;

console.log(projects);

export function addProject(name){
    projects.push({name,tasks:[]});
    console.log(projects);
}

export function addTask(title,description,dueDate,priority){
    projects[activeProject].tasks.push({title,description,dueDate,priority});
}

export function switchProject(index){
    activeProject = index;
}

export function getProjectArray(){
    return projects;
}

