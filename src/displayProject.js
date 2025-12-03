import { projectsArray } from "./projectLogic";

const projectList = document.querySelector("#project-list");

const projects = projectsArray();

export function displayProject(){

projects.forEach((project) => {
  const projectTitle = document.createElement("h2");
  projectTitle.innerHTML = `${project}`;
  projectTitle.classList.add("tab");

  projectList.append(projectTitle);
})

}