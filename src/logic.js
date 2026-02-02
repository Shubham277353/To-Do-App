 import renderProjects from "./renderProjects";

 const projects = [
    {
        name: "default",value: 0, tasks: []
    }
];

 let activeProject = 0;

 
 export function addProject(name,value){
     projects.push({name,value,tasks:[]});
    }
    
    export function addTask(formData){
        projects[activeProject].tasks.push(formData);
    }
    
    export function switchProject(index){
        activeProject = index;
        console.log(activeProject)
        renderProjects();
    }
    
    export function getProjectArray(){
        return projects;
    }

    export function gettasks(){
       return projects[activeProject].tasks;
    }

    console.log(projects);

