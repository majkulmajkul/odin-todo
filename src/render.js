import { toDoCard } from "./components";
import { handleEvents } from "./handleEvents";

const render = (function () {
  function renderTodos(project) {
    const todosContainer = document.querySelector(".todos-container");
    todosContainer.innerHTML = "";
    for (const todo of project.toDos) {
      const thisToDoCard = toDoCard(todo, project);

      thisToDoCard.addEventListener("click", todo.testClick);

      todosContainer.appendChild(thisToDoCard);
    }

    const newTodo = document.createElement("button");
    newTodo.textContent = "Add new";
    newTodo.addEventListener("click", () =>
      handleEvents.showNewTodoForm(project)
    );
    todosContainer.appendChild(newTodo);
  }

  function renderProjects(projectList) {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";

    for (const project of projectList.projects) {
      const thisProject = document.createElement("p");
      thisProject.addEventListener("click", () =>
        handleEvents.selectProject(project, projectList)
      );
      thisProject.textContent = `${project.name} - ${project.id}`;
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
