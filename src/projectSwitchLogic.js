import { switchProject } from "./logic";

const projectsContainer = document.getElementById("project-display-list");

export default function projectSwitchLogic() {
    projectsContainer.addEventListener("click", (e) => {
        const projectElement = e.target.closest(".project-item");
        if(!projectElement) return;

      const projectId = Number(projectElement.dataset.projectId);
      switchProject(projectId);
    });
}
