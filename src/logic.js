import renderProjects from "./renderProjects";
import renderTasks from "./renderTasks";

const projects = [
  {
    id: 0,
    name: "default",
    tasks: [],
  },
];

const completedTasks = []

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
  const newTask = {
    ...formData,
    id: crypto.randomUUID(),
    isDone: false
  };
  selectedProject.tasks.push(newTask);
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

export function deleteTasks(fetchedTaskId) {
  const selectedProject = projects.find((proj)=>proj.id === activeProjectId);
  selectedProject.tasks = selectedProject.tasks.filter((task)=> task.id !== fetchedTaskId);
  renderTasks();
}

export function taskCompleted(taskId){
  const selectedProject = projects.find((proj) => proj.id === activeProjectId);
  const index = selectedProject.tasks.findIndex((task)=> task.id === taskId);
  // selectedProject.tasks[index].isDone = true;
  console.log(taskId);
  console.log(selectedProject);
}

console.log(projects);
