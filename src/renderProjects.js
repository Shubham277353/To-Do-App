import { getProjectArray } from "./logic";

const projectsContainer = document.getElementById("project-display-list");
export default function renderProjects() {
  projectsContainer.innerHTML = "";
  
  const projects = getProjectArray();

  projects.forEach((project) => {
    const projectList = document.createElement("li");
    projectList.classList.add("project");
    projectList.dataset.projectId = project.id;
    projectList.innerHTML = `<button>${project.name}</button>`;
    projectsContainer.appendChild(projectList);
  });

}
