export default function renderProjects(projects) {
  const projectsContainer = document.querySelector(".projects-container");

  for (const project of projects) {
    const thisProject = document.createElement("p");
    thisProject.textContent = `${project.name} - ${project.id}`;
    projectsContainer.appendChild(thisProject);
  }
}
