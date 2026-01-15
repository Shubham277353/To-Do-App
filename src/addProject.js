import { addProject } from "./logic";

export function addNewProject() {
  const addProjectBtn = document.querySelector("#project-add-btn");
  const dialog = document.querySelector("#dlg");
  const cancelBtn = document.querySelector("#cancel-btn");
  const projectTitileInput = document.getElementById("name");

  addProjectBtn.addEventListener("click", () => {
    dialog.showModal();
  });

dialog.addEventListener("close",()=>{
    let returnVlaue = dialog.returnVlaue;
    if(returnVlaue === "submit"){
        console.log("hello");
        let title = projectTitileInput.value;
        addProject(title);
    }
});

}



