import renderProjects from "./renderProjects";

const projects = [
  {
    id: 1,
    name: "default",
    tasks: [],
  },
];

let projectCounter = 1;
let activeProject = 0;

export function addProject(name, value) {
    projectCounter += 1;
    console.log(projectCounter);
  projects.push({id:projectCounter,name, tasks: [] });
  console.log(projects);
}

export function addTask(formData) {
  projects[activeProject].tasks.push(formData);
}

export function switchProject(index) {
  activeProject = index;
  console.log(activeProject);
  renderProjects();
}

export function getProjectArray() {
  return projects;
}

export function gettasks() {
  return projects[activeProject].tasks;
}

console.log(projects);
