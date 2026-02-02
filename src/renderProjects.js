import { getProjectArray } from "./logic";

const projectsContainer = document.getElementById("project-display-list");
export default function renderProjects(){
    const projects = getProjectArray();

    projectsContainer.innerHTML = "";
    projects.forEach(project => {
        const projectList = document.createElement("li");
        projectList.classList.add("project");
        projectList.innerHTML = `<button>${project.name}</button>`;
        projectsContainer.appendChild(projectList);
    })

    
}
