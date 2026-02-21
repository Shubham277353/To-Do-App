import { getProjectArray } from "./logic";

const projectsContainer = document.getElementById("project-display-list");
export default function renderProjects() {
  projectsContainer.innerHTML = "";

  const projects = getProjectArray();

  projects.forEach((project) => {
    
    const projectList = document.createElement("li");
    projectList.classList.add("project");

    const projectBtn = document.createElement("button");
    projectBtn.textContent = project.name;
    projectBtn.dataset.projectId = project.id;
    projectBtn.classList.add("project-item");

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("project-del-btn");
    delBtn.dataset.projId = project.id;

    projectList.append(projectBtn,delBtn);
    projectsContainer.appendChild(projectList);
  });
}
