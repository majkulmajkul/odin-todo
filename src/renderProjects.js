import { handleEvents } from "./handleEvents";

export default function renderProjects(projectList) {
  const projectsContainer = document.querySelector(".projects-container");

  for (const project of projectList.projects) {
    const thisProject = document.createElement("p");
    thisProject.addEventListener("click", () =>
      handleEvents.selectProject(project, projectList)
    );
    thisProject.textContent = `${project.name} - ${project.id}`;
    projectsContainer.appendChild(thisProject);
  }
}
