import { projectsArray } from "./projectLogic";

const projectList = document.querySelector("#project-list");

const projects = projectsArray();

export function displayProject() {
  projectList.innerHTML = "";
  projects.forEach((project) => {
    const projectTitle = document.createElement("h2");
    projectTitle.innerHTML = `${project.name}`;
    projectTitle.classList.add("tabs");
    projectList.append(projectTitle);
  });
}
