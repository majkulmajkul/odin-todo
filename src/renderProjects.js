import renderTodos from "./renderTodos";

export default function renderProjects(projectList) {
  const projectsContainer = document.querySelector(".projects-container");

  for (const project of projectList.projects) {
    const thisProject = document.createElement("p");
    thisProject.addEventListener("click", () => {
      renderTodos(project);
      projectList.setActiveProject(project.id);
    });
    thisProject.textContent = `${project.name} - ${project.id}`;
    projectsContainer.appendChild(thisProject);
  }
}
