const projects = [];

export function createProject(id,name,task){
    let tasks = [task];
    let project = {id,name,tasks}; 
    projects.push(project);
    console.log(projects);
}
createProject("p1","Default");


export const projectsArray = ()=>{
    return projects;
}