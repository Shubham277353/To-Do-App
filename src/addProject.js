import { addProject } from "./logic";
import renderProjects from "./renderProjects";

export function addNewProject() {
  const addProjectBtn = document.querySelector("#project-add-btn");
  const dialog = document.querySelector("#dlg");
  const projectTitileInput = document.getElementById("name");

  addProjectBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  dialog.addEventListener("close", () => {
    let value = dialog.returnValue;
    if (value === "submit") {
      let title = projectTitileInput.value;
      addProject(title);
      renderProjects();
    }
  });
}
