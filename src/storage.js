import {
  getActiveProjectId,
  getProjectArray,
  getProjectCounter,
  setState,
} from "./logic";

export function saveState() {
    console.log("save state running ");
    const project = JSON.stringify(getProjectArray());
    
    const activeProjectId = JSON.stringify(getActiveProjectId());
    const projectCounter = JSON.stringify(getProjectCounter());
    
    localStorage.setItem("projectArray", project);
    localStorage.setItem("activeProjectId", activeProjectId);
    localStorage.setItem("projectCounter", projectCounter);
}

export function loadState() {
    console.log("load state running ");
    const savedProjects = localStorage.getItem("projectArray");
    const savedActiveId = localStorage.getItem("activeProjectId");
    const savedCounter = localStorage.getItem("projectCounter");
    
    if (!savedProjects || !savedActiveId || !savedCounter) return;
    
    const parsedProjects = JSON.parse(savedProjects);
    const parsedActiveId = JSON.parse(savedActiveId);
    const parsedCounter = JSON.parse(savedCounter);

  setState(parsedProjects, parsedActiveId, parsedCounter);
}
