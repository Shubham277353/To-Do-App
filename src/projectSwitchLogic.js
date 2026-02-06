import { getProjectArray } from "./logic";
import { switchProject } from "./logic";

export default function projectSwitchLogic(){
const projects = document.querySelectorAll(".project");
const projectArray = getProjectArray();
projects.forEach(project =>{
    project.addEventListener("click",()=>{
        const projectTitle = project.textContent;
        const projectIndex = projectArray.findIndex(p=>p.name === projectTitle);
        // console.log(projectIndex);
        switchProject(projectIndex);

    })
})
}