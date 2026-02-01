 const projects = [
    {
        name: "default" , tasks: []
    }
];

 let activeProject = 0;

 
 export function addProject(name){
     projects.push({name,tasks:[]});
    }
    
    export function addTask(formData){
        projects[activeProject].tasks.push(formData);
    }
    
    export function switchProject(index){
        activeProject = index;
    }
    
    export function getProjectArray(){
        return projects;
    }

    export function gettasks(){
       return projects[activeProject].tasks;
    }

    console.log(projects);

