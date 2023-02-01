import { toDoCard } from "./components";
import { handleEvents } from "./handleEvents";

const render = (function () {
  function renderTodos(projectList) {
    const todosContainer = document.querySelector(".todos-container");
    todosContainer.innerHTML = "";
    for (const todo of projectList.activeProject.toDos) {
      const thisToDoCard = toDoCard(todo, projectList);

      todosContainer.appendChild(thisToDoCard);
    }

    const newTodoButton = document.createElement("button");
    newTodoButton.textContent = "Add new";
    newTodoButton.addEventListener("click", () =>
      handleEvents.showNewTodoForm(projectList)
    );
    todosContainer.appendChild(newTodoButton);
  }

  function renderProjects(projectList) {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";

    for (const project of projectList.projects) {
      const thisProject = document.createElement("p");
      thisProject.addEventListener("click", () =>
        handleEvents.selectProject(project, projectList)
      );
      thisProject.textContent = `${project.name}`;
      const deleteProjectButton = document.createElement("span");
      deleteProjectButton.className = "delete-project";
      deleteProjectButton.textContent = " Delete Project";
      deleteProjectButton.addEventListener("click", () =>
        handleEvents.renderAreYouSure(projectList, project)
      );

      projectsContainer.appendChild(deleteProjectButton);

      projectsContainer.appendChild(thisProject);
    }

    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = "Add new";
    newProjectButton.addEventListener("click", () =>
      handleEvents.showNewProjectForm(projectList)
    );

    projectsContainer.appendChild(newProjectButton);
  }

  return { renderTodos, renderProjects };
})();

export { render };
