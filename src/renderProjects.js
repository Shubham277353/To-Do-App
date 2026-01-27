import { getProjectArray } from "./logic";

const projectsContainer = document.getElementById("project-display-list");
export default function renderProjects(){
    const projects = getProjectArray();

    projectsContainer.innerHTML = "";
    projects.forEach(project => {
        const projectList = document.createElement("li");
        projectList.textContent = `# ${project.name}`;
        projectsContainer.appendChild(projectList);
        console.log(project.name);
    })
}
