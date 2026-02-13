import renderProjects from "./renderProjects";
import renderTasks from "./renderTasks";

const projects = [
  {
    id: 0,
    name: "default",
    tasks: [],
  },
];

let projectCounter = 0;

let activeProjectId = 0;

export function addProject(name, value) {
  projectCounter += 1;
  console.log(projectCounter);
  projects.push({ id: projectCounter, name, tasks: [] });
  console.log(projects);
}

export function addTask(formData) {
  const selectedProject = projects.find((proj) => proj.id === activeProjectId);
  selectedProject.tasks.push(formData);
}

export function switchProject(projectId) {
  activeProjectId = projectId;
  console.log(activeProjectId);
  renderProjects();
  renderTasks();
}

export function getProjectArray() {
  return projects;
}

export function getTasks() {
  const selectedProject = projects.find((proj) => proj.id === activeProjectId);
  return selectedProject.tasks;
}

console.log(projects);
