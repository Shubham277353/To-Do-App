import { projects } from "./logic";

const projectsContainer = document.getElementById("project-display-div");
export default function renderProjects(){

    projectsContainer.innerHTML = "";
    
    const project = document.createElement("li");
    console.log(projects[1].name);
    console.log("yo");
}
