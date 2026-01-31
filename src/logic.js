 const projects = [
    {
        name: "default" , tasks: []
    }
];

 let activeProject = 0;

 
 export function addProject(name){
     projects.push({name,tasks:[]});
     console.log(projects);
    }
    
    export function addTask(formData){
        console.log(formData.title);
        projects[activeProject].tasks.push(formData);
    }
    
    export function switchProject(index){
        activeProject = index;
    }
    
    export function getProjectArray(){
        return projects;
    }

    export function gettasks(){
    }
    console.log(projects[activeProject].tasks) 
    console.log(projects);

