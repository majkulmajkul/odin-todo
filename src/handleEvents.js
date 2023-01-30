import { newToDoCard, newProjectCard } from "./components";
import { render } from "./render";
import { saveToLocalStorage, loadFromLocalStorage } from "./utils";

import { Todo, Project } from "./dataClasses";

const handleEvents = (function () {
  function selectProject(project, projectList) {
    projectList.setActiveProject(project.id);
    render.renderTodos(projectList);
  }

  function deleteTodoAndRerender(todo, projectList) {
    projectList.activeProject.deleteTodo(todo.id);
    render.renderTodos(projectList);
    saveToLocalStorage(projectList);
  }

  function showNewTodoForm(projectList) {
    const todosContainer = document.querySelector(".todos-container");
    todosContainer.appendChild(newToDoCard(projectList));
  }

  function submitNewTodo(projectList) {
    console.log(projectList);
    const title = document.querySelector("#todo-title-input").value;
    const description = document.querySelector("#todo-description-input").value;
    const priority = document.querySelector("#todo-priority-input").value;
    const dueDate = document.querySelector("#todo-duedate-input").value;
    const thisTodo = new Todo(title, dueDate, description, priority);
    projectList.activeProject.addTodo(thisTodo);
    render.renderTodos(projectList);
    saveToLocalStorage(projectList);
  }

  function showNewProjectForm(projectList) {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.appendChild(newProjectCard(projectList));
    console.log("New Project initiated");
  }

  function submitNewProject(projectList) {
    const newProjectName = document.querySelector("#new-project-name").value;
    const thisProject = new Project(newProjectName);
    projectList.addProject(thisProject);
    render.renderProjects(projectList);
    saveToLocalStorage(projectList);
  }

  function markCompletedandRerender(todo, projectList) {
    console.log(projectList.activeProject.toDos);
    todo.toggleCompleted();
    render.renderTodos(projectList);
    saveToLocalStorage(projectList);
  }

  return {
    selectProject,
    deleteTodoAndRerender,
    showNewTodoForm,
    submitNewTodo,
    showNewProjectForm,
    submitNewProject,
    markCompletedandRerender,
  };
})();

export { handleEvents };
