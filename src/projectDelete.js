import { projectDelete } from "./logic";

const projectContainer = document.getElementById("project-display-list");

export default function clickedDelBtn() {
  projectContainer.addEventListener("click", (e) => {
    if (!e.target.matches(".project-del-btn")) return;

    const projectId = Number(e.target.dataset.projId);
    console.log(projectId);
    projectDelete(projectId);
  });
}
