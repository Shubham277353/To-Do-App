const projects = [
    {
        name: "default" , tasks: []
    }
];

let activeProject = 0;

function addProject(name){
    projects.push({name,tasks:[]});
}

function addTask(title){
    projects[activeProject].tasks.push({title});
}

function switchProject(index){
    activeProject = index;
}

console.log(projects);
addTask("Learn js");
console.log(projects);
addProject("Work");
console.log(projects);
switchProject(1);
addTask("Cook");
console.log(projects);
