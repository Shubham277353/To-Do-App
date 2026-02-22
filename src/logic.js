import renderProjects from "./renderProjects";
import renderTasks from "./renderTasks";

let projects = [
  {
    id: 0,
    name: "default",
    tasks: [],
  },
];

let projectCounter = 0;

let activeProjectId = 0;

export function addProject(name) {
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
    isDone: false,
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
  if (!selectedProject) return [];
  return selectedProject.tasks;
}

export function deleteTasks(fetchedTaskId) {
  const selectedProject = projects.find((proj) => proj.id === activeProjectId);
  selectedProject.tasks = selectedProject.tasks.filter(
    (task) => task.id !== fetchedTaskId,
  );
  renderTasks();
}

export function taskCompleted(taskId) {
  const selectedProject = projects.find((proj) => proj.id === activeProjectId);
  const task = selectedProject.tasks.find((task) => task.id === taskId);
  task.isDone = !task.isDone;
  console.log(task);
  console.log(selectedProject);
  renderTasks();
}

export function projectDelete(projId) {
  projects = projects.filter((proj) => proj.id !== projId);
  if(projId === activeProjectId){
    if(projects.length > 0){
      activeProjectId = projects[0].id;
    }
    else{
      addProject("default");
      activeProjectId = projects[projects.length -1].id;
    }
  }
  renderProjects();
  renderTasks();
}

export function editForm(taskId,formData){
  console.log(taskId,formData);
}

console.log(projects);