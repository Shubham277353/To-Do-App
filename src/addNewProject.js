export default function addNewProject() {
  const addNewProjectBtn = document.getElementById("add-project-img");
  const projectList = document.getElementById("project-list");

  addNewProjectBtn.addEventListener("click", () => {
    const createProjectDiv = document.createElement("div");
    createProjectDiv.classList.add("create-project-div");

    const projectHeadin = document.createElement("h1");
    projectHeadin.classList.add("project-div-heading");
    projectHeadin.textContent = "New project";

    const projectTitle = document.createElement("input");
    projectTitle.classList.add("project-title-input");
    projectTitle.type = "text";
    projectTitle.placeholder = "Project name";

    const projectCancelBtn = document.createElement("button");
    projectCancelBtn.classList.add("project-cancel-btn");
    projectCancelBtn.textContent = "Cancel";

    const projectAddBtn = document.createElement("button");
    projectAddBtn.classList.add("project-add-btn");
    projectAddBtn.textContent = "Add";

    createProjectDiv.append(projectHeadin,projectTitle,projectCancelBtn,projectAddBtn);
    projectList.append(createProjectDiv);
  });
}
