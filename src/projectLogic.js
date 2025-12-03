const projects = [];

export function createProject(name){
    projects.push(name);
    console.log(projects);
}
createProject("Default");


export const projectsArray = ()=>{
    return projects;
}